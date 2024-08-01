import React from "react";
import ContactStyle from "./Contact.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface FormValues {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit,formState } = form;
  const {errors} = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
    
  };

  return (
    <div className={ContactStyle.contact_form_container}>
      <h2 className={ContactStyle.contact_title}>Contact With Us</h2>
      <form
        className={ContactStyle.contact_form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={ContactStyle.horizontal}>
            <input
              type="text"
              placeholder="Your Name"
              className={ContactStyle.contact_input}
              {...register("name", { required: "Name is required" })}
            />
            <p className={ContactStyle.error_message}> {errors.name?.message}</p>
        </div>
        <div className={ContactStyle.horizontal}>
            <input
              type="email"
              placeholder="Your Email"
              className={ContactStyle.contact_input}
              {...register("email",{
                pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'invalid email format'
                },
                required:'email is a required field'
              })}
            />
            <p className={ContactStyle.error_message}>{errors.email?.message}</p>
        </div>
        <div className={ContactStyle.horizontal_wide}>
            <textarea
              placeholder="Message"
              className={ContactStyle.contact_textarea}
              {...register("message", {
                required:'message is required field'
              })}
            ></textarea>
            <p className={ContactStyle.error_message}> {errors.message?.message} </p>
        </div>
        <button className={ContactStyle.contact_button}>Send</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Contact;
