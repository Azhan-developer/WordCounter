import React from 'react'

export default function About(props) {
    return (
        <div className="container mt-5" >
            <div class="accordion"  id="accordionExample">
  <div class="accordion-item" style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'white' : 'black' }}>
    <h2 class="accordion-header" >
      <button class="accordion-button" style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Text Counter ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Introducing our innovative website text counter, a powerful tool designed to revolutionize your writing experience. With advanced features such as real-time letter and word counting, you can effortlessly track your progress and optimize your content. Our user-friendly interface provides insightful analytics, including average word length and readability scores, enabling you to enhance the quality and impact of your text. Whether you're a professional writer or a student, our text counter is the perfect companion to elevate your writing to new heights.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'white' : 'black' }}>
    <h2 class="accordion-header">
      <button style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'yellow' : 'black' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Who are we ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        New Developers, led by Captain Azhan, is a team of passionate individuals dedicated to pushing the boundaries of technology. We believe that we are more than just developers; we are innovators, problem solvers, and dreamers. With a shared vision to create impactful solutions, we constantly challenge ourselves to embrace new ideas and embrace the power of collaboration. Together, we strive to shape the future through our skills, expertise, and unwavering commitment to excellence.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'white' : 'black' }}>
    <h2 class="accordion-header">
      <button  style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'white' : 'black' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About the developer
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Meet Azhan, a remarkable 17-year-old developer who spearheads the creation of our groundbreaking word counter and spearheads our website development projects. Despite his young age, Azhan's coding skills are nothing short of extraordinary, surpassing expectations and delivering exceptional results. His passion for programming coupled with his insatiable curiosity fuels his drive for continuous learning and pushing boundaries. As a prodigious talent in the industry, Azhan's contributions to our IT solutions have proven invaluable, establishing him as a trailblazer in the field of technology.      </div>
    </div>
  </div>
</div>
        </div>
    )
}
