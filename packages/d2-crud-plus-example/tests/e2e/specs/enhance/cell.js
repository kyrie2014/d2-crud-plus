// https://docs.cypress.io/api/introduction/api.html

import { createCrudTest } from '../../support/common'

const menu = '行编辑'
describe(menu, () => {
  before(() => {
    cy.login('admin', 'admin')
  })
  createCrudTest({
    cy,
    parentMenu: 'CRUD增强功能',
    subMenu: menu,
    idColIndex: 2,
    doAdd () {
    },
    doEdit () {
      cy.formItem('禁用').find('.el-switch__core').click()
    },
    checkEdit () {
      cy.getCell({ col: 3 }).find('input').should('be.disabled')
      cy.getCell({ col: 4 }).find('.el-switch__core').click()
      cy.getCell({ col: 3 }).find('input').should('not.disabled')
    }
  })
})
