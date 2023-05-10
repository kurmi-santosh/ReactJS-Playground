import { userSchema } from "./userValidations";

export const UserFormComponent = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    isValid ? console.log(formData) : console.error(formData);
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" style={{ margin: 5 }} />
        <br />
        <input type="email" placeholder="email" style={{ margin: 5 }} />
        <br />
        <input type="password" placeholder="password" style={{ margin: 5 }} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
