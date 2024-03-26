const users = [
  {
      username: "user1",
      password: "password1",
      email: "user1@example.com",
      address: [
          {
              street: "123 Main Street",
              locality: "Indiranagar",
              state: "Karnataka",
              country: "India",
              pincode: "560038"
          }
      ]
  },
  {
      username: "user2",
      password: "password2",
      email: "user2@example.com",
      address: [
          {
              street: "456 Park Avenue",
              locality: "Koramangala",
              state: "Karnataka",
              country: "India",
              pincode: "560095"
          }
      ]
  },
  {
      username: "user3",
      password: "password3",
      email: "user3@example.com",
      address: [
          {
              street: "789 Elm Street",
              locality: "Jayamahal",
              state: "Karnataka",
              country: "India",
              pincode: "560046"
          }
      ]
  },
  {
      username: "user4",
      password: "password4",
      email: "user4@example.com",
      address: [
          {
              street: "101 Oak Avenue",
              locality: "Whitefield",
              state: "Karnataka",
              country: "India",
              pincode: "560066"
          }
      ]
  },
  {
      username: "user5",
      password: "password5",
      email: "user5@example.com",
      address: [
          {
              street: "234 Cedar Street",
              locality: "Malleshwaram",
              state: "Karnataka",
              country: "India",
              pincode: "560003"
          }
      ]
  },
  {
      username: "user6",
      password: "password6",
      email: "user6@example.com",
      address: [
          {
              street: "567 Pine Road",
              locality: "BTM Layout",
              state: "Karnataka",
              country: "India",
              pincode: "560029"
          }
      ]
  },
  {
      username: "user7",
      password: "password7",
      email: "user7@example.com",
      address: [
          {
              street: "890 Maple Drive",
              locality: "Basavanagudi",
              state: "Karnataka",
              country: "India",
              pincode: "560004"
          }
      ]
  },
  {
      username: "user8",
      password: "password8",
      email: "user8@example.com",
      address: [
          {
              street: "123 Cherry Lane",
              locality: "Jayanagar",
              state: "Karnataka",
              country: "India",
              pincode: "560041"
          }
      ]
  },
  {
      username: "user9",
      password: "password9",
      email: "user9@example.com",
      address: [
          {
              street: "456 Birch Street",
              locality: "Electronic City",
              state: "Karnataka",
              country: "India",
              pincode: "560100"
          }
      ]
  },
  {
      username: "user10",
      password: "password10",
      email: "user10@example.com",
      address: [
          {
              street: "789 Walnut Avenue",
              locality: "Yelahanka",
              state: "Karnataka",
              country: "India",
              pincode: "560064"
          }
      ]
  },
  {
      username: "user11",
      password: "password11",
      email: "user11@example.com",
      address: [
          {
              street: "101 Spruce Street",
              locality: "HSR Layout",
              state: "Karnataka",
              country: "India",
              pincode: "560102"
          }
      ]
  },
  {
      username: "user12",
      password: "password12",
      email: "user12@example.com",
      address: [
          {
              street: "234 Cedar Avenue",
              locality: "Rajajinagar",
              state: "Karnataka",
              country: "India",
              pincode: "560010"
          }
      ]
  },
  {
      username: "user13",
      password: "password13",
      email: "user13@example.com",
      address: [
          {
              street: "567 Hickory Lane",
              locality: "Marathahalli",
              state: "Karnataka",
              country: "India",
              pincode: "560037"
          }
      ]
  },
  {
      username: "user14",
      password: "password14",
      email: "user14@example.com",
      address: [
          {
              street: "890 Aspen Drive",
              locality: "Hebbal",
              state: "Karnataka",
              country: "India",
              pincode: "560024"
          }
      ]
  },
  {
      username: "user15",
      password: "password15",
      email: "user15@example.com",
      address: [
          {
              street: "123 Oak Street",
              locality: "Bellandur",
              state: "Karnataka",
              country: "India",
              pincode: "560103"
          }
      ]
  },
  {
      username: "user16",
      password: "password16",
      email: "user16@example.com",
      address: [
          {
              street: "456 Cedar Road",
              locality: "JP Nagar",
              state: "Karnataka",
              country: "India",
              pincode: "560078"
          }
      ]
  },
  {
      username: "user17",
      password: "password17",
      email: "user17@example.com",
      address: [
          {
              street: "789 Birch Avenue",
              locality: "Domlur",
              state: "Karnataka",
              country: "India",
              pincode: "560071"
          }
      ]
  },
  {
      username: "user18",
      password: "password18",
      email: "user18@example.com",
      address: [
          {
              street: "101 Maple Street",
              locality: "Shivajinagar",
              state: "Karnataka",
              country: "India",
              pincode: "560051"
          }
      ]
  },
  {
      username: "user19",
      password: "password19",
      email: "user19@example.com",
      address: [
          {
              street: "234 Elm Drive",
              locality: "Frazer Town",
              state: "Karnataka",
              country: "India",
              pincode: "560005"
          }
      ]
  },
];

const orders = [
  {
      item: "Laptop",
      quantity: 1,
      price: 800,
      seller: "Electro Deals",
      purchaseDate: "2024-03-24",
      deliveryDate: "2024-03-27"
  },
  {
      item: "Smartphone",
      quantity: 2,
      price: 500,
      seller: "Tech Paradise",
      purchaseDate: "2024-03-23",
      deliveryDate: "2024-03-26"
  },
  {
      item: "Headphones",
      quantity: 1,
      price: 100,
      seller: "Audio Haven",
      purchaseDate: "2024-03-22",
      deliveryDate: "2024-03-25"
  },
  {
      item: "External Hard Drive",
      quantity: 1,
      price: 120,
      seller: "Storage Solutions",
      purchaseDate: "2024-03-21",
      deliveryDate: "2024-03-24"
  },
  {
      item: "Wireless Mouse",
      quantity: 1,
      price: 20,
      seller: "Gadget Emporium",
      purchaseDate: "2024-03-20",
      deliveryDate: "2024-03-23"
  },
  {
      item: "Keyboard",
      quantity: 1,
      price: 40,
      seller: "Tech Accessories",
      purchaseDate: "2024-03-19",
      deliveryDate: "2024-03-22"
  },
  {
      item: "Monitor",
      quantity: 1,
      price: 300,
      seller: "Display Hub",
      purchaseDate: "2024-03-18",
      deliveryDate: "2024-03-21"
  },
  {
      item: "Printer",
      quantity: 1,
      price: 150,
      seller: "Print Perfect",
      purchaseDate: "2024-03-17",
      deliveryDate: "2024-03-20"
  },
  {
      item: "Tablet",
      quantity: 1,
      price: 200,
      seller: "Tech Solutions",
      purchaseDate: "2024-03-16",
      deliveryDate: "2024-03-19"
  },
  {
      item: "Camera",
      quantity: 1,
      price: 400,
      seller: "Camera World",
      purchaseDate: "2024-03-15",
      deliveryDate: "2024-03-18"
  },
  {
      item: "Gaming Console",
      quantity: 1,
      price: 350,
      seller: "Game Emporium",
      purchaseDate: "2024-03-14",
      deliveryDate: "2024-03-17"
  },
  {
      item: "Speakers",
      quantity: 2,
      price: 80,
      seller: "Audio Land",
      purchaseDate: "2024-03-13",
      deliveryDate: "2024-03-16"
  },
  {
      item: "Smartwatch",
      quantity: 1,
      price: 180,
      seller: "Tech Wearables",
      purchaseDate: "2024-03-12",
      deliveryDate: "2024-03-15"
  },
  {
      item: "Router",
      quantity: 1,
      price: 60,
      seller: "Networking Solutions",
      purchaseDate: "2024-03-11",
      deliveryDate: "2024-03-14"
  },
  {
      item: "USB Flash Drive",
      quantity: 3,
      price: 15,
      seller: "Data Storage Mart",
      purchaseDate: "2024-03-10",
      deliveryDate: "2024-03-13"
  },
  {
      item: "Power Bank",
      quantity: 1,
      price: 25,
      seller: "Mobile Power",
      purchaseDate: "2024-03-09",
      deliveryDate: "2024-03-12"
  },
  {
      item: "Graphics Card",
      quantity: 1,
      price: 250,
      seller: "Graphics Galore",
      purchaseDate: "2024-03-08",
      deliveryDate: "2024-03-11"
  },
  {
      item: "Ethernet Cable",
      quantity: 2,
      price: 10,
      seller: "Cable Connection",
      purchaseDate: "2024-03-07",
      deliveryDate: "2024-03-10"
  },
  {
      item: "Wireless Earbuds",
      quantity: 1,
      price: 70,
      seller: "Audio Tech",
      purchaseDate: "2024-03-06",
      deliveryDate: "2024-03-09"
  },
  {
      item: "Webcam",
      quantity: 1,
      price: 50,
      seller: "Video Solutions",
      purchaseDate: "2024-03-05",
      deliveryDate: "2024-03-08"
  },
  {
      item: "Mousepad",
      quantity: 1,
      price: 5,
      seller: "Tech Accessories",
      purchaseDate: "2024-03-04",
      deliveryDate: "2024-03-07"
  }
];

const postData = [
    {
        heading: "The Impact of Artificial Intelligence on Healthcare",
        content: "Artificial Intelligence (AI) is revolutionizing healthcare by enhancing diagnosis accuracy, predicting patient outcomes, and optimizing treatment plans. From medical imaging to personalized medicine, AI technologies are reshaping the healthcare landscape.",
        likes: 120
    },
    {
        heading: "Blockchain Technology: Beyond Cryptocurrencies",
        content: "Blockchain technology extends far beyond cryptocurrencies, offering solutions for secure transactions, supply chain management, digital identity, and decentralized finance. With its transparent, immutable, and decentralized nature, blockchain is disrupting various industries.",
        likes: 150
    },
    {
        heading: "The Future of 5G Technology",
        content: "5G technology promises ultra-fast speeds, low latency, and massive connectivity, unlocking a new era of innovation and connectivity. From autonomous vehicles to smart cities, 5G networks will enable transformative applications that were previously unimaginable.",
        likes: 200
    },
    {
        heading: "Advancements in Quantum Computing",
        content: "Quantum computing has the potential to solve complex problems that are beyond the capabilities of classical computers. With qubits, superposition, and entanglement, quantum computers can tackle optimization, cryptography, and simulation tasks with unprecedented speed and efficiency.",
        likes: 180
    },
    {
        heading: "The Rise of Cybersecurity Threats",
        content: "In the digital age, cybersecurity threats are on the rise, posing significant challenges to organizations and individuals alike. From malware and phishing attacks to data breaches and ransomware, cybersecurity measures are crucial for protecting sensitive information and safeguarding digital assets.",
        likes: 220
    },
    {
        heading: "The Internet of Things (IoT) in Everyday Life",
        content: "The Internet of Things (IoT) is connecting devices, sensors, and objects to the internet, enabling seamless communication and data exchange. From smart homes to wearable devices, IoT technology is enhancing convenience, efficiency, and productivity in everyday life.",
        likes: 190
    },
    {
        heading: "Augmented Reality: Bridging the Physical and Digital Worlds",
        content: "Augmented Reality (AR) blends digital information with the physical world, creating immersive experiences and enhancing human perception. From gaming and entertainment to education and healthcare, AR technology is reshaping industries and unlocking new possibilities.",
        likes: 170
    },
    {
        heading: "The Role of Big Data in Business Intelligence",
        content: "Big Data analytics enables organizations to extract valuable insights from vast amounts of data, driving informed decision-making and business growth. By leveraging predictive analytics, machine learning, and data visualization, businesses can gain a competitive edge in today's data-driven world.",
        likes: 160
    },
    {
        heading: "Cloud Computing: Empowering Enterprises",
        content: "Cloud computing offers scalable, on-demand access to computing resources, allowing businesses to deploy applications and services with flexibility and efficiency. From startups to multinational corporations, cloud technology is transforming the way organizations operate and innovate.",
        likes: 210
    },
    {
        heading: "The Evolution of Machine Learning Algorithms",
        content: "Machine learning algorithms are evolving rapidly, powering recommendation systems, chatbots, and autonomous vehicles. With advancements in deep learning and neural networks, machine learning applications are becoming more sophisticated and pervasive.",
        likes: 230
    },
    {
        heading: "The Future of Robotics in Industry",
        content: "Robotics technology is expanding beyond traditional manufacturing applications to assistive robots, drones, and humanoid robots. With advancements in artificial intelligence and sensor technology, robots are increasingly capable of performing complex tasks in various domains.",
        likes: 240
    },
    {
        heading: "The Promise of Virtual Reality Technology",
        content: "Virtual Reality (VR) technology immerses users in simulated environments, offering new ways to experience and interact with digital content. From gaming and entertainment to education and training, VR technology has the potential to revolutionize various industries.",
        likes: 170
    },
    {
        heading: "Artificial Intelligence in Autonomous Vehicles",
        content: "Artificial Intelligence (AI) is driving advancements in autonomous vehicle technology, enabling self-driving cars to perceive their environment, make decisions, and navigate safely. With AI algorithms and sensor fusion, autonomous vehicles are inching closer to mainstream adoption.",
        likes: 200
    },
    {
        heading: "The Future of Wearable Technology",
        content: "Wearable technology, including smartwatches, fitness trackers, and augmented reality glasses, is becoming increasingly popular, offering personalized experiences and real-time health monitoring. With advancements in sensors and miniaturization, wearable devices are evolving rapidly.",
        likes: 180
    },
    {
        heading: "The Impact of IoT on Smart Cities",
        content: "The Internet of Things (IoT) is driving the development of smart cities, with connected devices and sensors optimizing infrastructure, transportation, energy, and public services. From smart grids to intelligent traffic management systems, IoT technology is enhancing urban living.",
        likes: 210
    },
    {
        heading: "The Growing Role of Data Science in Business",
        content: "Data science plays a crucial role in extracting insights from data, enabling data-driven decision-making and innovation in business. From predictive analytics to data visualization, data science techniques empower organizations to derive value from their data assets.",
        likes: 190
    },
    {
        heading: "The Challenges and Opportunities of Quantum Computing",
        content: "Quantum computing holds immense promise for solving complex problems in fields such as cryptography, optimization, and drug discovery. However, challenges such as decoherence and error correction need to be overcome to realize the full potential of quantum computers.",
        likes: 220
    },
    {
        heading: "The Role of Artificial Intelligence in Financial Services",
        content: "Artificial Intelligence (AI) is transforming the financial services industry, with applications ranging from fraud detection and risk management to customer service and investment advisory. AI-powered algorithms analyze vast amounts of data to drive insights and automate processes.",
        likes: 230
    },
    {
        heading: "The Future of Autonomous Drones",
        content: "Autonomous drones are revolutionizing industries such as agriculture, construction, and logistics, with applications ranging from crop monitoring to package delivery. With advancements in AI and sensor technology, drones are becoming more autonomous and versatile.",
        likes: 210
    },
    {
        heading: "The Role of Artificial Intelligence in Education",
        content: "Artificial Intelligence (AI) is reshaping the education landscape, with personalized learning experiences, intelligent tutoring systems, and adaptive assessments. AI-powered tools help educators deliver tailored instruction and support student success.",
        likes: 180
    },
    {
        heading: "The Future of Biotechnology and Genetic Engineering",
        content: "Biotechnology and genetic engineering hold the key to addressing global challenges such as disease treatment, food security, and environmental sustainability. From gene editing technologies to synthetic biology, biotechnology innovations are transforming various industries.",
        likes: 200
    }
];
module.exports = {users,orders,postData};