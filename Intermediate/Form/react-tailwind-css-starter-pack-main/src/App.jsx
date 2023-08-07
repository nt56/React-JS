import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country : "India",
    streetAddress : "",
    city : "",
    state : "",
    postalCode : "",
    comments : false,
    candidates : false,
    offers : false,
    pushNotifications : ""

  });

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name] : type === "checkbox" ? checked : value}))
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing The Data");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

      <label htmlFor="firstName">First Name : </label>
      <br/>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="nagbhushan"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>
      
      <label htmlFor="lastName">Last Name : </label>
      <br/>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="tirth"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>

      <label htmlFor="firstName">Email-ID : </label>
      <br/>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="abc@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>

      <label htmlFor="country">Country : </label>
      <br/>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
      >
        <option value="india">India</option>
        <option value="us">US</option>
        <option value="canada">Canada</option>
        <option value="mexico">Mexico</option>
      </select>
      <br/>
      <br/>

      <label htmlFor="streetAddress">Street Address : </label>
      <br/>
      <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="B-25C"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>

      <label htmlFor="city">City : </label>
      <br/>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="pune"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>

      <label htmlFor="state">State : </label>
      <br/>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="Maharastra"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>

      <label htmlFor="postalCode">Postal Code : </label>
      <br/>
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="110077"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <br/>

      <fieldset>
        <legend>By Email : </legend>
        <div className="flex">
          <input
            type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comments on a posting.</p>
          </div>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Candidates</label>
            <p>Get notified when a candidate applies for job.</p>
          </div>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>
      </fieldset>
      <br/>
      <br/>

      <fieldset>
        <legend>Push Notifications </legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input
          type="radio"
          name="pushNotifications"
          id="pushEverything"
          value="Everything"
          onChange={changeHandler}
        />
        <label htmlFor="pushEverything">Everything</label>

        <br/>
        <input
          type="radio"
          name="pushNotifications"
          id="pushEmail"
          value="Same as email"
          onChange={changeHandler}
        />
        <label htmlFor="pushEmail">Same As Email</label>

        <br/>
        <input
          type="radio"
          name="pushNotifications"
          id="pushNothing"
          value="No Push Notifivtaions"
          onChange={changeHandler}
        />
        <label htmlFor="pushNothing">No Push Notifivtaions</label>
      </fieldset>

      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>

      </form>
    </div>
  );
}

export default App;
