/* eslint-disable no-undef */

import data from '../../submissionData.json'; // do not create this file
import mock from '../fixtures/db.json';
// const data = [
//   {
//     submission_link: 'http://localhost:3000',
//     id: 'shanti-local',
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe('React Assignment', function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != '/') {
        url = url + '/';
      }
      if (server_url.charAt(server_url.length - 1) != '/') {
        server_url = server_url + '/';
      }
      cy.writeFile('db.json', mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    it('Should have only get products button visible', () => {
      cy.visit(url);
      cy.get("[data-testid='get-btn']").should('exist').and('have.text', 'Get Products');
      cy.get('.dashboard').should('not.exist');
      cy.get("[data-testid='cart-container']").should('not.exist');
      cy.then(() => {
        acc_score += 1;
      });
    });

    it('Should make GET request to ap endpoint /products', () => {
      cy.intercept('GET', `**/products`).as('products');
      cy.visit(url);
      cy.get("[data-testid='get-btn']").click();
      cy.wait('@products').then((res) => {
        expect(res.response.statusCode).to.eq(200);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it('Products container should be visible and get products button should not', () => {
      cy.get("[data-testid='get-btn']").should('not.exist');
      cy.get('.dashboard').should('exist');
      cy.get("[data-testid='products-container']").children().should('have.length', 15);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it('Cart should be visible with correct message', () => {
      cy.get("[data-testid='empty-text']").should('exist').and('have.text', 'The cart is empty!');
      cy.get("[data-testid='cart-container']").should('not.exist');

      cy.then(() => {
        acc_score += 1;
      });
    });

    it('Correct products information should be visible in the dom', () => {
      cy.get("[data-testid='products-container']")
        .children()
        .each((child, index) => {
          cy.wrap(child).find("[data-testid='name']").should('contain', mock.products[index].name);
          cy.wrap(child).find("[data-testid='price']").should('contain', mock.products[index].price);
          cy.wrap(child).find("[data-testid='quantity']").should('contain', mock.products[index].stock);
          cy.wrap(child)
            .find("[data-testid='add-btn']")
            .should('have.text', mock.products[index].stock ? 'Add to cart' : 'Out of Stock');
        });

      cy.then(() => {
        acc_score += 3;
      });
    });

    it('Quantity should updated in the dom when product is added to cart', () => {
      cy.get("[data-testid='add-btn']").first().click().click();
      cy.get("[data-testid='quantity']")
        .first()
        .should('contain', mock.products[0].stock - 2);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it('If quantity goes to zero then button should have text Out of Stock', () => {
      cy.get("[data-testid='add-btn']").eq(5).click().click();
      cy.get("[data-testid='quantity']")
        .eq(5)
        .should('contain', mock.products[5].stock - 2);
      cy.get("[data-testid='add-btn']").eq(5).should('have.text', 'Out of Stock').and('be.disabled');

      cy.then(() => {
        acc_score += 1;
      });
    });

    it('Out of Stock buttons should be in the disabled state', () => {
      cy.get("[data-testid='add-btn']").eq(3).should('have.text', 'Out of Stock').and('be.disabled');
      cy.get("[data-testid='add-btn']").eq(4).should('have.text', 'Out of Stock').and('be.disabled');
      cy.get("[data-testid='add-btn']").eq(5).should('have.text', 'Out of Stock').and('be.disabled');

      cy.then(() => {
        acc_score += 1;
      });
    });

    it('Table should have correct information releted to products and quantity', () => {
      cy.get("[data-testid='add-btn']").last().click().click();
      cy.get("[data-testid='quantity']")
        .last()
        .should('contain', mock.products[mock.products.length - 1].stock - 2);
      cy.get("[data-testid='cart-body']").children().should('have.length', 4);

      cy.get("[data-testid='add-btn']").eq(8).click();
      cy.get("[data-testid='quantity']")
        .eq(8)
        .should('contain', mock.products[8].stock - 1);
      cy.get("[data-testid='cart-body']").children().should('have.length', 5);

      cy.get("[data-testid='cart-body']")
        .children()
        .then((res) => {
          cy.wrap(res).children((child) => {
            cy.wrap(child).eq(1).should('contain', mock.products[0].name);
            cy.wrap(child).eq(2).should('contain', mock.products[0].price);
            cy.wrap(child).eq(3).should('contain', 2);
          });

          cy.wrap(res)
            .last()
            .children((child) => {
              cy.wrap(child).eq(1).should('contain', mock.products[4].name);
              cy.wrap(child).eq(2).should('contain', mock.products[4].price);
              cy.wrap(child).eq(3).should('contain', 1);
            });
        });

      cy.then(() => {
        acc_score += 3;
      });
    });

    it('Total price should calculated correctly and visible in table', () => {
      cy.get("[data-testid='total-price']").should('have.text', 274.93);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      console.log('final score:', acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile('results.json', `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
