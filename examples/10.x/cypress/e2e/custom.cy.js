describe("cy.vitals() command not using the defaults", () => {
  it("should meet the custom provided Web Vitals thresholds", () => {
    cy.vitals({
      url: "https://www.google.com/",
      firstInputSelector: "body",
      thresholds: {
        lcp: 2500,
        fid: 100,
        cls: 0.1,
        fcp: 1800,
        ttfb: 600,
      },
    });
  });
});
