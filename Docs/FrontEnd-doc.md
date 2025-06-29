# **Case Study: Fasih Application with Flutter**

**1\. Introduction**

**Overview of the Project**

The "Fasih" application is designed to improve users' Arabic language skills by providing daily writing challenges. Users receive a randomly generated topic each day and are required to write a short passage. An AI model then evaluates the submission based on predefined criteria, providing feedback on areas of improvement.

**Objective of the Case Study**

To **implement Fasih with Flutter framework**, providing a **scalable, performant, and secure** application while improving UI/UX and AI-based evaluations.

**Old Application: [https://drive.google.com/file/d/1DEviTL8jsUFYVP1eyjMqzYc8U7Kk5GZv/view?usp=sharing](https://drive.google.com/file/d/1DEviTL8jsUFYVP1eyjMqzYc8U7Kk5GZv/view?usp=sharing)**

---

**2\. Domain Model**

**Entities & Attributes**

**User**

* id (int): Unique identifier  
* username (String): User login name  
* email (String): User email  
* password (String): Hashed password

**Challenge**

* id (int): Unique identifier  
* title (String): Challenge title  
* description (String): Challenge description  
* dateAssigned (DateTime): The date of challenge assignment

**Submission**

* id (int): Unique identifier  
* userId (int): References User  
* challengeId (int): References Challenge  
* content (String): User’s written response  
* dateSubmitted (DateTime): Submission date

**Evaluation**

* id (int): Unique identifier  
* submissionId (int): References Submission  
* score (int): AI-generated score (out of 15\)  
* feedback (String): AI-generated feedback  
* dateEvaluated (DateTime): Date of evaluation

**Cardinality & Relationships**

* **One User → Multiple Submissions**  
* **One Challenge → Multiple Submissions**  
* **One Submission → One Evaluation**

---

**3\. Sequence Diagram**

**Actors & Objects**

* **User** (interacts with the app)  
* **App Controller** (handles requests)  
* **Authentication System** (manages login/registration)  
* **AI Model (Gemini API)** (evaluates submissions)  
* **Database System** (stores data)

**Flow**

**User Authentication Process**

1. User requests login/register → App Controller  
2. App Controller sends request → Authentication System  
3. Authentication System validates credentials and responds  
4. App Controller notifies the user of success/failure

**Writing & Submission Process**

5. User selects a daily challenge  
6. User writes content and submits it → App Controller  
7. App Controller saves submission → Database

**AI Evaluation Process**

8. App Controller sends submission → AI Model (Gemini API)  
9. AI Model processes and returns a score/feedback  
10. App Controller stores evaluation → Database  
11. App Controller notifies the user with results

---

**4\. Entity-Relationship Diagram (ERD)**

**Entities & Relationships**

* **User (1) → (0..\*) Submissions** (Users can have multiple submissions)  
* **Challenge (1) → (0..\*) Submissions** (Challenges can have multiple submissions)  
* **Submission (1) → (1) Evaluation** (Each submission has one evaluation)

---

**5\. Identified Issues & Proposed Solutions**

**Current Issues**

1. **Scalability Limitations:** Google Sheets as a database is inefficient.  
2. **Performance Delays:** AI evaluation requests take time.  
3. **Limited UI Flexibility:** Thunkable has UI/UX constraints.  
4. **Security Gaps:** No proper authentication or data encryption.

**Proposed Solutions**

1. **Migrate to Firebase Firestore** for scalable real-time data management.  
2. **Optimize API Calls** to reduce AI evaluation delays.  
3. **Build in Flutter** to allow for a fully customized UI/UX.  
4. **Implement Firebase Authentication** for secure user login.

---

**6\. Conclusion & Next Steps**

Migrating "Fasih" to Flutter will improve performance, scalability, and user experience. The next steps include:

* **Developing the Flutter App with PocketBase**  
* **Optimizing AI Model Interactions**  
* **Testing and Deploying the New Version**

