.login-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

.login-bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 70%);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.login-card {
  position: relative;
  z-index: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03),
    0 24px 48px rgba(0, 0, 0, 0.4),
    0 0 80px rgba(108, 99, 255, 0.05);
  animation: slideUp 0.5s ease both;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-logo {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 0 12px var(--accent-glow));
}

.login-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.login-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.field-input {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  width: 100%;
}

.field-input::placeholder {
  color: #444456;
}

.field-input:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.field--error .field-input {
  border-color: var(--error);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

.field--valid .field-input {
  border-color: var(--success);
}

.field-error {
  font-size: 0.8125rem;
  color: var(--error);
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
  line-height: 1.4;
  padding: 0.375rem 0.625rem;
  background: var(--error-bg);
  border-radius: 6px;
}

.field--checkbox {
  flex-direction: row;
  align-items: flex-start;
  gap: 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--border);
  border-radius: 5px;
  background: var(--surface-2);
  margin-top: 1px;
  transition: all 0.2s;
  position: relative;
}

.checkbox-input:checked + .checkbox-custom {
  background: var(--accent);
  border-color: var(--accent);
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 1px;
  width: 5px;
  height: 9px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

.checkbox-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}

.login-btn {
  margin-top: 0.5rem;
  padding: 0.875rem;
  border-radius: 10px;
  border: none;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: not-allowed;
  transition: all 0.25s;
  background: var(--surface-2);
  color: #444456;
  border: 1px solid var(--border);
}

.login-btn--active {
  background: var(--accent);
  color: white;
  cursor: pointer;
  border-color: var(--accent);
  box-shadow: 0 4px 20px var(--accent-glow), 0 0 0 1px rgba(108, 99, 255, 0.2);
}

.login-btn--active:hover {
  background: #7c74ff;
  transform: translateY(-1px);
  box-shadow: 0 8px 28px var(--accent-glow);
}

.login-btn--active:active {
  transform: translateY(0);
}

.login-footer {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}
