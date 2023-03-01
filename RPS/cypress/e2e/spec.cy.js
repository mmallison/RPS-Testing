describe("Rock Paper Scissors Game", () => {
  it("plays rock and checks the result", () => {

    // Visit Site
    cy.visit("RPS.html"); 

    // Click on Rock Button
    cy.get("#rock").click(); 

     // Get computer option and store its text in variable
     cy.get("#computer-option").then(computerOptionSpan => {
      const computerOption = computerOptionSpan.text();

      // Check that the correct result is displayed
      if (computerOption === "Rock") {
        cy.get("#result").should("have.text", "It is a tie!");
      } else if (computerOption === "Scissors") {
        cy.get("#result").should("have.text", "You win!");
      } else {
        cy.get("#result").should("have.text", "You lose!");
      }
    });
  });

  // Repeat for Scissors
it("plays scissors and checks the result", () => {
  cy.visit("RPS.html"); 
  
  cy.get("#scissors").click(); 

   
   cy.get("#computer-option").then(computerOptionSpan => {
    const computerOption = computerOptionSpan.text();

    if (computerOption === "Scissors") {
      cy.get("#result").should("have.text", "It is a tie!");
    } else if (computerOption === "Paper") {
      cy.get("#result").should("have.text", "You win!");
    } else {
      cy.get("#result").should("have.text", "You lose!");
    }
  });
});

// Repeats for paper
it("plays paper and checks the result", () => {
  cy.visit("RPS.html"); 
  
  cy.get("#paper").click(); 

   
   cy.get("#computer-option").then(computerOptionSpan => {
    const computerOption = computerOptionSpan.text();

    if (computerOption === "Paper") {
      cy.get("#result").should("have.text", "It is a tie!");
    } else if (computerOption === "Rock") {
      cy.get("#result").should("have.text", "You win!");
    } else {
      cy.get("#result").should("have.text", "You lose!");
    }
  });
});
});





