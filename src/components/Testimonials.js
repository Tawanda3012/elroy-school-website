import React from "react";
import "./Testimonials.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      message: "My child loves going to this school! The teachers are so kind and the classes are so fun.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      message: "I was a bit hesitant to send my child here, but now I'm so glad I did. They have such a great curriculum and the kids are so well-behaved.",
      imageUrl: "https://via.placeholder.com/151",
    },
    {
      name: "Bob Johnson",
      message: "I was a bit skeptical at first, but the school really has changed my child's life. They're so much more confident and well-rounded now.",
      imageUrl: "https://via.placeholder.com/152",
    },
    {
      name: "Alice Smith",
      message: "I was a bit hesitant to send my child here, but now I'm so glad I did. They have such a great curriculum and the kids are so well-behaved.",
      imageUrl: "https://via.placeholder.com/153",
    },
    {
      name: "Charlie Johnson",
      message: "I was a bit skeptical at first, but the school really has changed my child's life. They're so much more confident and well-rounded now.",
      imageUrl: "https://via.placeholder.com/154",
    },
    {
      name: "David Brown",
      message: "I was a bit skeptical at first, but the school really has changed my child's life. They're so much more confident and well-rounded now.",
      imageUrl: "https://via.placeholder.com/155",
    },
  ];

  const numItemsPerSlide = 3;
  const numSlides = Math.ceil(testimonials.length / numItemsPerSlide);

  const testimonialItems = [];
  for (let i = 0; i < numSlides; i++) {
    const startIndex = i * numItemsPerSlide;
    const endIndex = startIndex + numItemsPerSlide;
    const items = testimonials.slice(startIndex, endIndex);

    testimonialItems.push(
      <Carousel.Item key={i}>
        <Row className="testimonial-carousel">
          {items.map((testimonial, index) => (
            <Col md={4} key={index}>
              <div className="testimonial-card">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="rounded-circle"
                />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.message}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <div className="testimonials">
      <Container>
        <h2>Testimonials</h2>
        <Carousel controls={false} interval={5000} pause={false}>
          {testimonialItems}
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;