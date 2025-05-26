import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Title */}
        <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-5xl md:text-7xl mb-4">
          Lung Cancer Detection
        </h1>

        {/* Technologies */}
        <div className="flex gap-3 text-lg font-bold text-yellow-400 mb-8">
          <span>ML</span>
          <span>CNN</span>
          <span>Open CV</span>
          
        </div>

        {/* Project Image */}
        <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden mb-8">
          <img
            src="https://res.cloudinary.com/dcjddhs7s/image/upload/v1748272740/dreamstime_l_137230671-1280x640_xgx26t.jpg  "
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <div className="prose prose-xl prose-invert mb-12">
          <div>
  <div>
    <div>
      <h1>Overview: Lung Cancer Detection Using Deep Learning (Xception Model)</h1>

      <hr />

      <h2>Problem Statement</h2>
      <p>
        Lung cancer is among the most aggressive forms of cancer, and its early detection plays a vital role in improving survival rates. Traditional diagnostic methods can be time-consuming and prone to human error. Therefore, there is a critical need for intelligent systems that can assist medical professionals in diagnosing lung cancer accurately and efficiently.
      </p>

      <hr />

      <h2>Solution</h2>
      <p>
        Developed a deep learning model for classifying lung CT scan images into four categories: Adenocarcinoma, Squamous Cell Carcinoma, Large Cell Carcinoma, and Normal. The solution utilizes Xception, a pretrained convolutional neural network, as the feature extractor. By using transfer learning, the model leverages learned features from ImageNet and integrates a new classification head for medical imaging.
      </p>

      <hr />

      <h2>Technologies Used</h2>
      <p><strong>Programming Language:</strong> Python</p>
      <p><strong>Libraries:</strong></p>
      <ul>
        <li><strong>TensorFlow/Keras:</strong> For building and training the deep learning model.</li>
        <li><strong>NumPy, Pandas:</strong> For data manipulation and analysis.</li>
        <li><strong>Matplotlib, Seaborn:</strong> For visualization of training metrics and results.</li>
      </ul>
      <p><strong>Model Architecture:</strong></p>
      <ul>
        <li><strong>Xception:</strong> Pretrained model used as a feature extractor with frozen weights.</li>
        <li><strong>Global Average Pooling:</strong> To reduce the feature maps.</li>
        <li><strong>Dense Layer with Softmax:</strong> For multi-class classification.</li>
      </ul>

      <hr />

      <h2>Impact</h2>
      <ul>
        <li>
          <strong>High Accuracy:</strong> Achieved strong performance on both training and validation datasets after 50 epochs with early stopping and learning rate scheduling.
        </li>
        <li>
          <strong>Clinical Applicability:</strong> Demonstrated potential for real-world use in computer-aided diagnostic systems to assist radiologists.
        </li>
        <li>
          <strong>Efficiency:</strong> Reduced manual diagnostic efforts and minimized the risk of human error.
        </li>
        <li>
          <strong>Automation:</strong> Enables faster diagnosis by automating CT scan analysis.
        </li>
      </ul>

      <hr />

      <h2>Conclusion</h2>
      <p>
        This project highlights the effectiveness of deep learning, particularly transfer learning with the Xception model, in detecting lung cancer from CT images. It provides a reliable, scalable tool that could revolutionize early diagnosis in clinical environments. Further improvements could include expanding the dataset, refining the model architecture, and integrating it with hospital information systems.
      </p>
      <p>
        <strong>Google Colab Link:</strong>
        <a href="https://colab.research.google.com/drive/1bGl5nMAr-hE6q17DUmBjE1n0A2vn3YIh" target="_blank">Open Project</a>
      </p>
    </div>
  </div>
</div>

        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/pasam05/Lung-Cancer"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-yellow-400 bg-transparent px-6 py-3 font-bold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-navy"
          >
            View Source
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-slate-100 bg-transparent px-6 py-3 font-bold text-slate-100 transition-colors hover:bg-slate-100 hover:text-navy"
          >
            Video Demo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
