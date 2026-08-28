import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw, ShieldAlert, X, MessageSquare } from 'lucide-react';
import { queryKeplerRAG } from '../data/ragKnowledgeBase';

export default function RagAssistant({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Soy el Asistente Virtual GenAI de **Kepler Bolivia**. Estoy preparado para responder tus preguntas sobre la iniciativa Kepler, la guía de 20 experimentos de química de **Virtual STEM**, la arquitectura técnica y los laboratorios. ¿En qué puedo ayudarte hoy?',
      inScope: true
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const quickQuestions = [
    "¿Qué experimentos de química incluye Virtual STEM?",
    "¿Qué es Virtual STEM y cuál es su demo?",
    "¿Quiénes dirigen la iniciativa Kepler?",
    "¿Cómo funciona la arquitectura de costo optimizado?",
    "¿Cuál es el correo oficial de contacto?"
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInputQuery('');
    setLoading(true);

    setTimeout(() => {
      const ragResponse = queryKeplerRAG(query);
      
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: ragResponse.answer,
          title: ragResponse.title,
          inScope: ragResponse.inScope
        }
      ]);
      setLoading(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Button at bottom-right corner (Modern Standard) */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Asistente Virtual Kepler AI"
          style={{
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
            color: '#ffffff',
            border: '2px solid var(--accent-lime)',
            borderRadius: '50px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(0, 168, 255, 0.5)',
            fontWeight: 700,
            fontSize: '0.95rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
        >
          <div style={{
            background: '#ffffff',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue)'
          }}>
            <Bot size={18} />
          </div>
          <span>Kepler AI Help</span>
        </button>
      </div>

      {/* Floating Modal Window Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '84px',
          right: '24px',
          width: 'clamp(320px, 90vw, 420px)',
          height: '560px',
          zIndex: 1001,
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'var(--bg-secondary)',
          border: '1.5px solid var(--border-glow)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          
          {/* Header Bar */}
          <div style={{
            background: 'var(--bg-primary)',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                padding: '8px',
                borderRadius: '10px',
                color: '#ffffff',
                display: 'flex'
              }}>
                <Bot size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Kepler GenAI Assistant
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-lime)', fontWeight: 500 }}>
                  ● Asistente Oficial RAG
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button 
                onClick={() => setMessages([messages[0]])}
                title="Reiniciar conversación"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <RefreshCw size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                title="Cerrar ventana de ayuda"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background: 'var(--bg-card)'
          }}>
            {messages.map((msg, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {msg.sender === 'bot' && (
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    background: 'var(--accent-cyan)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Bot size={16} />
                  </div>
                )}

                <div style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  background: msg.sender === 'user' 
                    ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))'
                    : msg.inScope === false 
                    ? 'rgba(239, 68, 68, 0.1)'
                    : 'var(--bg-secondary)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  border: msg.sender === 'user' 
                    ? 'none' 
                    : msg.inScope === false 
                    ? '1px solid rgba(239, 68, 68, 0.3)'
                    : '1px solid var(--border-color)',
                  lineHeight: '1.5',
                  fontSize: '0.88rem'
                }}>
                  {msg.title && (
                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--accent-lime)', marginBottom: '4px' }}>
                      📌 {msg.title}
                    </div>
                  )}
                  {msg.inScope === false && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontWeight: 600, fontSize: '0.8rem', marginBottom: '4px' }}>
                      <ShieldAlert size={14} />
                      <span>Consulta fuera de ámbito</span>
                    </div>
                  )}
                  <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                </div>

                {msg.sender === 'user' && (
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    background: 'var(--accent-lime-dim)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'var(--accent-cyan)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Bot size={16} />
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Consultando documentos de Kepler...
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div style={{
            padding: '8px 14px',
            background: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  borderRadius: '50px',
                  padding: '4px 12px',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            style={{
              padding: '12px 16px',
              background: 'var(--bg-primary)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input 
              type="text"
              value={inputQuery}
              onChange={e => setInputQuery(e.target.value)}
              placeholder="Pregunta sobre Kepler o Virtual STEM..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '10px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              className="btn-primary"
              style={{ padding: '10px 14px', borderRadius: '10px' }}
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
