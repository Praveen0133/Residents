import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    profilePhoto: "",
    linkedin: "",
  });

  function fetchData() {
    fetch("http://localhost:8000/get")
      .then((res) => res.json())
      .then((finaldata) => setData(finaldata));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        fetchData();
        setShowModal(false);
        setFormData({
          firstName: "",
          lastName: "",
          role: "",
          profilePhoto: "",
          linkedin: "",
        });
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="navbar">
        <div>
          <span>
            <img
              src="https://cdn.prod.website-files.com/62f41dee5606d80f65b7dcbb/6676ffc8dcc184ba44858820_the_residency_logo.svg"
              alt=""
            />
          </span>
          <span>The Residency</span>
        </div>
        <ul>
          <li>Home</li>
        </ul>
        <div>
          <button onClick={() => setShowModal(true)}>Add Residents</button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Resident</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Profile Photo URL"
                value={formData.profilePhoto}
                onChange={(e) =>
                  setFormData({ ...formData, profilePhoto: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="container">
        {data.map((ele, index) => (
          <div className="card" key={index}>
            <img
              src={ele.profilePhoto || "https://via.placeholder.com/150"}
              alt={`${ele.firstName} ${ele.lastName}`}
            />
            <div className="card-content">
              <h3>
                {ele.firstName} <span>{ele.lastName}</span>
              </h3>
              <h4>{ele.role}</h4>
              {ele.linkedin && (
                <a
                  href={ele.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin"
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
