export const projects = [
  {
    slug: "flood-person-detection",
    title: "Person Detection During Floods",
    shortTitle: "Flood Person Detection",
    category: "Computer Vision",
    description:
      "YOLO-based person detection for identifying stranded people in aerial flood imagery.",
    overview:
      "A deep learning object-detection project focused on detecting extremely small human figures in drone imagery captured during flood conditions.",
    challenge:
      "Flood imagery introduces small targets, water reflections, motion blur, low contrast, partial occlusion and complex backgrounds. The project builds a custom dataset from real flood drone videos and compares multiple YOLO architectures.",
    stack: ["Python", "PyTorch", "OpenCV", "Torchvision", "YOLO", "Jupyter", "Google Colab"],
    highlights: [
      "More than 6,000 frames extracted from flood drone videos captured around Amaravathi.",
      "YOLO-format annotations with person as the target class.",
      "Six YOLO architectures compared over 100 training epochs.",
      "YOLOv3u reported the strongest overall precision and mAP@50 in the repository results."
    ],
    metrics: [
      ["YOLOv3u", "0.975", "0.810", "0.898", "0.779"],
      ["YOLOv5n", "0.963", "0.807", "0.880", "0.710"],
      ["YOLOv8n", "0.967", "0.813", "0.889", "0.725"],
      ["YOLOv10n", "0.962", "0.804", "0.889", "0.740"],
      ["YOLOv11n", "0.967", "0.811", "0.886", "0.720"],
      ["YOLOv12n", "0.963", "0.819", "0.893", "0.728"]
    ],
    metricHeaders: ["Model", "Precision", "Recall", "mAP@50", "mAP@50-95"],
    github:
      "https://github.com/Kovida-0212/Person-Detection-Through-Drone-Technology",
    report:
      "https://github.com/Kovida-0212/Person-Detection-Through-Drone-Technology",
    featured: true
  },
  {
    slug: "twitter-hate-speech",
    title: "Multilingual Twitter Hate Speech Detection",
    shortTitle: "Twitter Hate Speech Detection",
    category: "NLP / Transformers / XAI",
    description:
      "Multilingual hate-speech classification across English, Hindi and Telugu using ML, DL, Transformers and Explainable AI.",
    overview:
      "A multilingual text-classification pipeline that compares traditional machine learning, deep learning and transformer-based models for social-media hate speech detection.",
    challenge:
      "Social-media text contains slang, informal writing, code-mixing and context-dependent expressions. The project standardizes datasets across English, Hindi and Telugu and evaluates increasingly contextual model families.",
    stack: ["Python", "TF-IDF", "CNN", "BiLSTM", "Hugging Face Transformers", "mBERT", "XLM-R", "HateBERT", "LIME", "SHAP"],
    highlights: [
      "Unified English, Hindi and Telugu datasets for binary hate/non-hate classification.",
      "Compared Logistic Regression, Decision Tree, Random Forest and SVM baselines.",
      "Compared BiLSTM and CNN with transformer models including mBERT, Distil-mBERT, XLM-RoBERTa and HateBERT.",
      "Added LIME, SHAP and Integrated Gradients for prediction explanations."
    ],
    metrics: [
      ["Distil-mBERT", "—", "—", "0.73", "—"],
      ["mBERT", "0.78", "—", "—", "—"],
      ["XLM-RoBERTa", "0.78", "—", "0.74", "—"]
    ],
    metricHeaders: ["Model", "Accuracy", "Precision", "F1", "Notes"],
    github: "https://github.com/Kovida-0212/Twitter-Hate-Speech-Detection",
    report: "https://github.com/Kovida-0212/Twitter-Hate-Speech-Detection",
    featured: true
  },
  {
    slug: "parkinsons",
    title: "Early Detection of Parkinson’s Disease",
    shortTitle: "Parkinson’s Disease Prediction",
    category: "Machine Learning / Healthcare",
    description:
      "Machine-learning classification of Parkinson’s disease using biomedical voice measurements, feature selection and SMOTE.",
    overview:
      "A comparative machine-learning study that investigates how feature-selection methods and different classifiers affect Parkinson’s disease prediction.",
    challenge:
      "The project addresses imbalanced biomedical data and high-dimensional voice measurements while comparing several feature-selection approaches and classifiers.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Imbalanced-learn", "Matplotlib", "Seaborn", "SMOTE"],
    highlights: [
      "Applied SMOTE to address class imbalance.",
      "Explored L1/Lasso, PCA, Chi-Square, Fisher score and dispersion-based feature selection.",
      "Compared Logistic Regression, Decision Tree, Random Forest, Naïve Bayes, SVM and KNN.",
      "Repository and presentation report Random Forest as the strongest classifier."
    ],
    metrics: [
      ["Logistic Regression", "0.8974", "0.8889", "0.9412", "1.0000"],
      ["Decision Tree", "0.9231", "0.9394", "0.9538", "0.9688"],
      ["Random Forest", "0.9487", "0.9412", "0.9697", "1.0000"],
      ["Naïve Bayes", "0.6923", "0.9167", "0.7857", "0.6875"],
      ["SVM", "0.8462", "0.8611", "0.9118", "0.9688"],
      ["KNN", "0.8205", "0.9167", "0.8923", "0.9063"]
    ],
    metricHeaders: ["Model", "Accuracy", "Precision", "F1", "Recall"],
    github: "https://github.com/Kovida-0212/Early_Detection_of_Parkison_Disease",
    report: "https://github.com/Kovida-0212/Early_Detection_of_Parkison_Disease",
    featured: true
  },
  {
    slug: "chat-server",
    title: "Real-Time Multi-Client Chat Server",
    shortTitle: "Chat Server System",
    category: "Python / Networking",
    description:
      "A real-time multi-client chat application using TCP sockets, multithreading, broadcasting and private messaging.",
    overview:
      "A command-line client/server communication system designed to demonstrate networking, concurrency and inter-process communication concepts in Python.",
    challenge:
      "The system needs to handle multiple clients concurrently while routing broadcast and private messages, managing disconnections and monitoring server resources.",
    stack: ["Python 3", "TCP/IP", "Socket Programming", "Multithreading", "psutil", "CLI"],
    highlights: [
      "Supports multiple simultaneous client connections.",
      "Broadcasts messages to connected clients.",
      "Supports private messaging through a /msg command.",
      "Uses separate threads for concurrent send/receive handling.",
      "Tracks server memory usage with psutil."
    ],
    github: "https://github.com/Kovida-0212/Chat_Server_System",
    report: "https://github.com/Kovida-0212/Chat_Server_System",
    featured: false
  },
  {
    slug: "employee-burnout",
    title: "Employee Burnout Prediction",
    shortTitle: "Employee Burnout Prediction",
    category: "Machine Learning / Internship",
    description:
      "Linear-regression model for predicting employee burnout from workload, mental fatigue and related workplace features.",
    overview:
      "An AI/ML internship project completed through IBM SkillsBuild / EDUNET Foundation, focused on data preprocessing, exploratory analysis and predictive modelling for employee burnout.",
    challenge:
      "Burnout is influenced by several workplace and personal factors. The project prepares the data, explores relationships and uses Linear Regression to estimate burnout levels.",
    stack: ["Python", "Pandas", "Scikit-learn", "Linear Regression", "EDA", "Feature Scaling", "One-Hot Encoding"],
    highlights: [
      "Preprocessed the dataset using feature scaling and one-hot encoding.",
      "Used EDA to investigate patterns and relationships.",
      "Evaluated the model using R², MAE and RMSE.",
      "Identified resource allocation / work hours and mental fatigue as important predictors."
    ],
    metrics: [
      ["Linear Regression", "0.9129", "0.045", "0.055"]
    ],
    metricHeaders: ["Model", "R²", "MAE", "RMSE"],
    github: null,
    report: null,
    featured: false
  },
  {
    slug: "healthcare-ai",
    title: "AI-Enabled Diagnostic Frameworks in Healthcare",
    shortTitle: "Healthcare AI Frameworks",
    category: "Deep Learning / Healthcare",
    description:
      "A research-oriented capstone exploring medical image classification, robustness, compression and explainability.",
    overview:
      "A group capstone studying AI-enabled diagnostic frameworks and several techniques used to improve medical-image models and their practical deployment.",
    challenge:
      "Medical AI systems need good predictive performance while also considering class imbalance, adversarial robustness, computational efficiency and explainability.",
    stack: ["CNN", "CapsNet", "ResNet", "DenseNet", "FGSM", "PGD", "Adversarial Training", "TensorFlow Lite", "Grad-CAM"],
    highlights: [
      "Compared CNN, CapsNet, ResNet and DenseNet approaches.",
      "Investigated FGSM and PGD adversarial attacks and defence through adversarial training.",
      "Explored model compression and quantization using TensorFlow Lite.",
      "Studied explainability through Grad-CAM and saliency maps."
    ],
    metrics: [
      ["DenseNet", "84%", "84%", "84%"],
      ["CNN after balancing", "80%", "80%", "80%"],
      ["ResNet", "79%", "79%", "79%"],
      ["CapsNet", "78%", "78%", "77%"]
    ],
    metricHeaders: ["Model", "Validation Accuracy", "Precision", "F1"],
    github: null,
    report: null,
    featured: false
  }
];