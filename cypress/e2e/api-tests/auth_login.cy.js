// Cypress API test for POST https://dummyjson.com/auth/login

describe('POST /auth/login', () => {
  it('should successfully login and return tokens', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('accessToken');
      expect(response.body).to.have.property('refreshToken');
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('username', 'emilys');
      expect(response.body).to.have.property('email', 'emily.johnson@x.dummyjson.com');
      expect(response.body).to.have.property('firstName', 'Emily');
      expect(response.body).to.have.property('lastName', 'Johnson');
      expect(response.body).to.have.property('gender', 'female');
      expect(response.body).to.have.property('image', 'https://dummyjson.com/icon/emilys/128');
    });
  });
});
