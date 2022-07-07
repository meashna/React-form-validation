import React from "react";
import { useForm } from "react-hook-form";
export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Register here to avail student discount</h1>
        </div>
        <div>
          <input
            placeholder=" Student Name"
            {...register("name", { required: true })}
          />
          <error>
            {errors.name?.type === "required" && "Name is required!"}
          </error>
        </div>
        <div>
          <input
            placeholder=" College Name"
            {...register("name", { required: true })}
          />
          <error>
            {errors.name?.type === "required" && " College name is required!"}
          </error>
        </div>
        <div>
          <input
          placeholder=" Year of Passing"
            type="number"
            {...register("number", {required:true})}
          />
          <error>
          {errors.name?.type === "required" && " Passing year is required!"}
          </error>
        </div>
        <div>
          <input
            placeholder=" Email address"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required!"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format!"}
          </error>
        </div>
        <div>
          <input
          placeholder=" Phone Number"
          type="digit"
          {...register("digit", {required:true})}
          />
          <error>
          {errors.name?.type === "required" && " Phone numberis required!"}
          </error>
        </div>
        <div>
          <input className="button" text="Sign up" type="submit"/>
        </div>
        <div className="text">
            <h5>Already a member? <a href="#">Sign in</a></h5>
        </div>
      </form>
    </div>
  );
}