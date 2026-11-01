// Усі мальки міст одним модулем: один запит замість 27
export default import.meta.glob("./images/timezones/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});
