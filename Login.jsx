// cypress/e2e/login.cy.js

const VALID_EMAIL = 'test@example.com'
const VALID_PASSWORD = 'Test1234!'
const INVALID_EMAIL = 'gecersiz-email'
const WEAK_PASSWORD = '12345678'

describe('Login Formu E2E Testleri', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // ─────────────────────────────────────────────────────────────────
  // SENARYO 1: Başarılı form doldurulduğunda submit edebiliyorum
  // ─────────────────────────────────────────────────────────────────
  describe('Senaryo 1: Başarılı Giriş', () => {
    it('Geçerli bilgilerle formu doldurup submit ettiğimde success sayfasına gidebiliyorum', () => {
      // Geçerli email gir
      cy.get('[data-cy=email]').type(VALID_EMAIL)

      // Geçerli şifre gir
      cy.get('[data-cy=password]').type(VALID_PASSWORD)

      // Şartları kabul et
      cy.get('[data-cy=terms]').check()

      // Buton aktif olmalı
      cy.get('[data-cy=submit]').should('not.be.disabled')

      // Formu gönder
      cy.get('[data-cy=submit]').click()

      // Success sayfasında olduğumuzu doğrula
      cy.url().should('include', '/success')
      cy.get('[data-cy=success-page]').should('be.visible')
    })
  })

  // ─────────────────────────────────────────────────────────────────
  // SENARYO 2: Hatalı durumlarda beklenen hata mesajları görünüyor
  // ─────────────────────────────────────────────────────────────────
  describe('Senaryo 2: Hatalı Durumlar', () => {
    it('Yanlış email girildiğinde: 1 hata mesajı görünür, doğru mesaj gösterilir ve buton disabled kalır', () => {
      // Hatalı email gir ve blur
      cy.get('[data-cy=email]').type(INVALID_EMAIL).blur()

      // Ekranda 1 tane hata mesajı olmalı
      cy.get('[data-cy=email-error], [data-cy=password-error]').should('have.length', 1)

      // Doğru hata mesajı görünmeli
      cy.get('[data-cy=email-error]')
        .should('be.visible')
        .and('contain', 'Geçerli bir e-posta adresi giriniz')

      // Buton disabled olmalı
      cy.get('[data-cy=submit]').should('be.disabled')
    })

    it('Email ve password yanlış girildiğinde: 2 hata mesajı görünür ve password hata mesajı var', () => {
      // Hatalı email gir ve blur
      cy.get('[data-cy=email]').type(INVALID_EMAIL).blur()

      // Zayıf şifre gir ve blur
      cy.get('[data-cy=password]').type(WEAK_PASSWORD).blur()

      // Ekranda 2 tane hata mesajı olmalı
      cy.get('[data-cy=email-error], [data-cy=password-error]').should('have.length', 2)

      // Password hata mesajı görünmeli
      cy.get('[data-cy=password-error]')
        .should('be.visible')
        .and('contain', 'Şifre en az 8 karakter')

      // Buton hâlâ disabled olmalı
      cy.get('[data-cy=submit]').should('be.disabled')
    })

    it('Email ve password doğru ama şartlar kabul edilmediğinde: buton disabled kalır', () => {
      // Geçerli email gir
      cy.get('[data-cy=email]').type(VALID_EMAIL).blur()

      // Geçerli şifre gir
      cy.get('[data-cy=password]').type(VALID_PASSWORD).blur()

      // Şartları KABUL ETME

      // Buton disabled olmalı
      cy.get('[data-cy=submit]').should('be.disabled')
    })
  })
})
