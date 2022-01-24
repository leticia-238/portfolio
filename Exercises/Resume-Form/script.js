const buttonSubmit = form.submit;

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  form.checkValidity()
    ? createCurriculum()
    : (document.querySelector("#message").style.display = "block");
});

const curriculumData = () => {
  return {
    name: form.name.value,
    email: form.email.value,
    cpf: form.cpf.value,
    address: form.address.value,
    city: form.city.value,
    state: form.state.value,
    type: form.type.value,
    abstract: form.abstract.value,
    job: {
      name: form.office.value,
      description: form.description.value,
      start: form.start.value,
    },
  };
};

function createCurriculum() {
  const person = curriculumData();
  document.querySelector("#curriculum-container").style.display = "block";
  console.log(person);
}
