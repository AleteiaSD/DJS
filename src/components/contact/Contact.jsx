import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = async (data, e) => { 
    try {
      const { name, email, subject, comment } = data;

      const emailData = {
        name: name,
        email: email,
        subject: subject,
        comment: comment
      };
      await axios.post("http://localhost:5000/api/Email", emailData); 
      e.target.reset();
      toast.success(t("contact.toastSuccess"));
    } catch (error) {
      console.error(error);
      toast.error(t("contact.toastError"));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input type="text" className="form-control" placeholder={t("contact.fullName")} {...register("name", { required: true })}/>
              {errors.name && errors.name.type === "required" && (<span className="invalid-feedback">{t("contact.fullNameRequired")}</span>)}</div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input type="email" className="form-control" placeholder={t("contact.emailAddress")}
                {
                  ...register( "email",{ required: t("contact.emailAddressRequired"), pattern: { value: /\S+@\S+\.\S+/, message: t("contact.emailAddressRequiredMessage"),},},{ required: true })}/>
              {errors.email && (<span className="invalid-feedback">{errors.email.message}</span>)}
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-3">
              <input type="text"
                className="form-control" placeholder={t("contract.subject")}
                {...register("subject", { required: true })}/>
              {errors.subject && (<span className="invalid-feedback">{t("contract.subjectRequired")}</span>)}
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-3">
              <textarea rows="4" className="form-control" placeholder={t("contact.typeComment")}
                {...register("comment", { required: true })}></textarea>
              {errors.comment && (<span className="invalid-feedback">{t("contact.typeCommentRequired")}</span>)}
            </div>
          </div>
          <div className="col-12">
            <div className="btn-bar"><button className="px-btn px-btn-white">{t("contact.sendMessageBtn")}</button></div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
