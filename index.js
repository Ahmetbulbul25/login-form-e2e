import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_.#^()[\]{}<>|\\\/`~,;:'"-])[A-Za-z\d@$!%*?&_.#^()[\]{}<>|\\\/`~,;:'"-]{8,}$/

function Login() {
  const navigate = useNavigate()

  const [values, setValues] = useState({ email: '', password: '', terms: false })
  const [touched, setTouched] = useState({ email: false, password: false, terms: false })

  const errors = {
    email: !EMAIL_REGEX.test(values.email) ? 'Geçerli bir e-posta adresi giriniz.' : '',
    password: !PASSWORD_REGEX.test(values.password)
      ? 'Şifre en az 8 karakter, büyük/küçük harf, rakam ve özel karakter içermelidir.'
      : '',
    terms: !values.terms ? 'Devam edebilmek için şartları kabul etmelisiniz.' : '',
  }

  const isValid = !errors.email && !errors.password && !errors.terms

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) navigate('/success')
  }

  return (
    <div className="login-page">
      <div className="login-bg-orb orb-1" />
      <div className="login-bg-orb orb-2" />

      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">⬡</div>
          <h1 className="login-title">Hoş Geldiniz</h1>
          <p className="login-subtitle">Hesabınıza giriş yapın</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className={`field ${touched.email && errors.email ? 'field--error' : ''} ${touched.email && !errors.email && values.email ? 'field--valid' : ''}`}>
            <label className="field-label" htmlFor="email">E-posta</label>
            <input
              id="email"
              data-cy="email"
              className="field-input"
              type="email"
              name="email"
              placeholder="ornek@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <span className="field-error" data-cy="email-error">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className={`field ${touched.password && errors.password ? 'field--error' : ''} ${touched.password && !errors.password && values.password ? 'field--valid' : ''}`}>
            <label className="field-label" htmlFor="password">Şifre</label>
            <input
              id="password"
              data-cy="password"
              className="field-input"
              type="password"
              name="password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <span className="field-error" data-cy="password-error">{errors.password}</span>
            )}
          </div>

          {/* Terms */}
          <div className={`field field--checkbox ${touched.terms && errors.terms ? 'field--error' : ''}`}>
            <label className="checkbox-label">
              <input
                data-cy="terms"
                type="checkbox"
                name="terms"
                className="checkbox-input"
                checked={values.terms}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="checkbox-custom" />
              <span className="checkbox-text">
                <a href="#" className="link">Kullanım Şartları</a>'nı ve{' '}
                <a href="#" className="link">Gizlilik Politikası</a>'nı kabul ediyorum.
              </span>
            </label>
          </div>

          <button
            data-cy="submit"
            type="submit"
            className={`login-btn ${isValid ? 'login-btn--active' : ''}`}
            disabled={!isValid}
          >
            Giriş Yap
          </button>
        </form>

        <p className="login-footer">
          Hesabınız yok mu? <a href="#" className="link">Kayıt olun</a>
        </p>
      </div>
    </div>
  )
}

export default Login
