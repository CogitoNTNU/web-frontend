import Button from "../components/Buttons/Button";

const UserRegister = () => {
  return (
    <div className="flex flex-col gap-4">
      <form action="form-group">
        <input name="query" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserRegister;
