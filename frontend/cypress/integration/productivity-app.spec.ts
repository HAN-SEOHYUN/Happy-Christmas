const baseURL = "http://localhost:3000";

const testData = {
  id: 1,
  name: "홍길동",
  message: "안녕",
  pwd: "1",
};

const _testData = {
  name: "등록되지않은이름",
};

//context > describe > it

context("메인페이지", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}`);
  });

  function showAlertCard() {
    cy.get("[name=recipient]")
      .type(testData.name)
      .get("[name=check-Btn]")
      .click()
      .get(".alert-card")
      .should("be.visible");
  }

  describe("등록된 이름이고,", () => {
    it("비밀번호가 틀리면 Alert을 보여준다", () => {
      showAlertCard();

      cy.get("[name=pwd-input]")
        .type("잘못된 비밀번호")
        .get("[name=checkPwd-Btn]")
        .click();

      cy.on("window:alert", (str) => {
        expect(str).to.equal("비밀번호가 올바르지 않습니다 !");
      });
    });

    it("비밀번호가 맞다면 상세페이지로 이동한다", () => {
      showAlertCard();

      cy.get("[name=pwd-input]")
        .type(testData.pwd)
        .get("[name=checkPwd-Btn]")
        .click()
        .location()
        .should((location) => {
          expect(location.pathname).to.equal("/detail");

          it("상세페이지에서 편지 쓰기 버튼을 클릭하면 입력페이지로 이동한다", () => {
            cy.get("#write-Btn")
              .click()
              .location()
              .should((location) => {
                expect(location.pathname).to.equal("/register");
              });
          });
        });
    });
  });

  it("등록되지 않은 이름을 입력했을 때 Alert을 띄운다", () => {
    cy.get("[name=recipient]")
      .clear()
      .type(_testData.name)
      .get("[name=check-Btn]")
      .click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(_testData.name + `에게 등록된 메세지가 없습니다`);
    });
  });
});

describe("입력페이지", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/register`);
  });

  it("내용을 입력하지 않으면 작성하기 버튼을 누를 수 없다.", () => {
    if (
      cy.get("[name=sender]").should("be.empty") ||
      cy.get("[name=message]").should("be.empty")
    ) {
      cy.get("[name=create-Btn]").should("be.disabled");
    }
  });

  it("내용을 입력하고 작성하기 버튼을 누르면 Alert이 발생하고 홈페이지로 이동한다. .", () => {
    cy.get("[name=sender]").type(`${testData.name}`);
    cy.get("[name=message]").type(`${testData.message}`);
    cy.get("[name=create-Btn]").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        `${testData.name}님의 메세지가 등록되었습니다. HappyChristmas!`
      );
    });
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });

  it("돌아가기 버튼을 누르면 메인페이지로 이동한다.", () => {
    cy.get("#home-Btn")
      .click()
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/");
      });
  });
});

context("메뉴바 버튼", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}`);
  });
  it("From 한서현 버튼을 누르면 메인페이지가 새로고침된다.", () => {
    cy.get("#from-Btn")
      .click()
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/");
      });
  });

  it("To 한서현 버튼을 입력페이지로 이동한다..", () => {
    cy.get("#to-Btn")
      .click()
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/register");
      });
  });
});
