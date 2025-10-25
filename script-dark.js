body {
  background-color: #000;
  color: #fff;
  font-family: 'Montserrat Arabic', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  text-align: center;
}

.container {
  max-width: 600px;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

.question {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.question.active {
  display: block;
}

button {
  background-color: #333333;
  color: #fff;
  border: none;
  padding: 12px 20px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
}

button:hover {
  background-color: #444444;
}

.hidden {
  display: none;
}

#result button {
  background-color: #333333;
  color: #fff;
  border-radius: 8px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

#result button:hover {
  background-color: #444444;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
