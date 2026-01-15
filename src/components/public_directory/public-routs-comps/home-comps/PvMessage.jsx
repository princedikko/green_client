import React from "react";
import Images from "../../../public_directory/homepage/home_pictures/provost_image.png";

const PvMessage = () => {
  return (
    <section className="section-pvmessage">
      <div className="home-pvmessage-container rwdG2">
        <div className="home-pvmessage-leftDiv">
          <img
            src={Images}
            alt="City Image"
            className="home-pvmessage-image"
            style={{
              borderRadius: "1.2rem",
              // transform:"scale(1.5)"
            }}
          />
        </div>
        <div className="home-pvmessage-rightDiv">
          <span>Malam Mu'azu Abubakar</span>
          <h1 className="home-pvmessage-heading">A Message from the Provost</h1>
          <p className="home-pvmessage-paragraph">
            Welcome to the Manga College of Nursing Sciences, where our
            commitment to excellence in education and compassionate healthcare
            is at the heart of everything we do. At our College, we believe that
            nursing is more than a profession—it is a calling. Our mission is to
            cultivate the next generation of nursing leaders who are equipped
            with the knowledge, skills, and empathy necessary to provide
            exceptional care and make a meaningful impact on the health of our
            communities.
          </p>
          <p className="home-pvmessage-paragraph">
            {/* We are dedicated to offering a comprehensive and dynamic curriculum that blends theoretical knowledge with practical experience. Our faculty members are not only distinguished educators but also seasoned practitioners who bring real-world insights into the classroom.  */}
            {/* Through innovative teaching methods, state-of-the-art facilities, and a supportive learning environment, we strive to prepare our students for the challenges and opportunities of modern nursing practice. */}

            {/* Our commitment extends beyond the classroom. We foster an inclusive and collaborative community where students, faculty, and healthcare professionals work together to advance the field of nursing. Our partnerships with leading healthcare institutions provide invaluable opportunities for hands-on learning and professional development.

As you explore our website, I invite you to learn more about our programs, meet our dedicated faculty, and discover the many ways in which we are making a difference in the world of healthcare. Whether you are a prospective student, a current learner, or a member of our esteemed alumni network, you are an integral part of our community. Together, we are shaping the future of nursing with excellence, integrity, and compassion.

Thank you for visiting our College of Nursing Sciences. We look forward to embarking on this journey with you and achieving great things together.

Warm regards,

[Provost's Name]
Provost, College of Nursing Sciences */}
          </p>

          <button className="home-pvmessage-button">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default PvMessage;
