import React, { useState } from "react";
import ImgAbout from "./img/Logo.png";
import {
  BennerStyle,
  BennerText,
  ButtonStyle,
  AboutStyle,
  AboutImg,
  AboutText,
  AboutHeading,
  TestiStyle,
  TestiForm,
} from "./StyledBody";

const BodyComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputText, setInputText] = useState("");

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const addTestimonial = () => {
    if (inputAuthor.trim() !== "" && inputText.trim() !== "") {
      const newTestimonial = {
        author: inputAuthor,
        text: inputText,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setInputAuthor("");
      setInputText("");
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  const handleGamelabClick = () => {
    window.location.href = "https://gamelab.id";
  };

  const handleDashboardClick = () => {
    window.location.href = "https://gamelab.id/dashboard";
  };

  return (
    <div>
      <BennerStyle>
        <BennerText>
          <h3>Raih Masa Depan Brilian dengan Optimasi Skill Digital</h3>
          <ButtonStyle onClick={handleGamelabClick}>Gamelab. ID</ButtonStyle>
        </BennerText>
      </BennerStyle>
      <AboutStyle>
        <AboutImg>
          <img
            src={ImgAbout}
            style={{ height: "300px", width: "300px" }}
            alt="about"
          />
        </AboutImg>
        <AboutText>
          <AboutHeading>GAMELAB.ID</AboutHeading>
          <p>
            GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui
            program pelatihan, magang online, dan kelas intensife yang diampu
            oleh para profesional di bidangnya.
          </p>
          <ButtonStyle onClick={handleDashboardClick}>Dashboard</ButtonStyle>
        </AboutText>
      </AboutStyle>

      <section>
        <div>
          <TestiForm>
            <h1> Testimonial App</h1>
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              placeholder="Enter author..."
              value={inputAuthor}
              onChange={handleAuthorChange}
            />

            <label htmlFor="pesan">Pesan</label>
            <textarea
              placeholder="Enter testimonial..."
              value={inputText}
              onChange={handleTextChange}
            ></textarea>
            <button
              onClick={addTestimonial}
              style={{
                backgroundColor: "#3887be",
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add Testimonial
            </button>
          </TestiForm>

          <TestiStyle className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <div className="box" key={index}>
                <h2 className="card-title">{testimonial.author}</h2>
                <p className="card-text">{testimonial.text}</p>
                <button onClick={() => deleteTestimonial(index)}>Delete</button>
              </div>
            ))}
          </TestiStyle>
        </div>
      </section>
    </div>
  );
};

export default BodyComponent;
