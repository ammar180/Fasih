**Case Study: Developing a Web API for "Fasih" Application**

**1\. Introduction**

**Overview of the Project**

**"Fasih" is an Arabic language learning application designed to improve linguistic awareness and enhance users' ability to express themselves correctly in Arabic. The application provides daily challenges where users receive random topics and are required to write a few sentences on the given subject. An AI-powered model then evaluates their writing, highlighting strengths and areas for improvement.**

**Purpose of the API**

**The Web API for "Fasih" will manage:**

* **CRUD operations for managing topics, user submissions, AI evaluations, and result tracking.**  
* **Storing and retrieving daily challenges.**  
* **AI-based assessment integration for analyzing written responses.**  
* **User progress tracking with feedback on weaknesses and strengths.**

**Technologies Used**

* **Backend: Pocketbase**  
* **Authentication: JWT**  
* **AI Model: Gemini**  
  ---

**2\. Requirements & Functionalities**

**CRUD Operations**

**The API will support operations for:**

* **Topics (Create, Read, Update, Delete)**  
* **User Submissions (Store user responses)**  
* **AI Evaluations (Process responses and return scores)**  
* **Results (Store and retrieve evaluation data)**  
* **Users (Account creation, login, and tracking progress)**

**API Endpoints**

**TopicsController**

* **GET /api/topics: Retrieves all topics**  
* **GET /api/topics/{id}: Retrieves a specific topic**  
* **POST /api/topics: Adds a new topic**  
* **PUT /api/topics/{id}: Updates a topic**  
* **DELETE /api/topics/{id}: Deletes a topic**

**SubmissionsController**

* **POST /api/submissions: Stores user response**  
* **GET /api/submissions/{userId}: Retrieves all user submissions**

**EvaluationsController**

* **POST /api/evaluations: Sends response to AI model for evaluation**  
* **GET /api/evaluations/{submissionId}: Retrieves AI-generated score**

**ResultsController**

* **GET /api/results/{userId}: Retrieves historical scores**  
* **DELETE /api/results/{id}: Deletes a specific result**  
  ---

**3\. System Design & Architecture**

**Domain Model**

* **User (Id, Name, Email, Password, Registration Date)**  
* **Topic (Id, Title, Description, Date Assigned)**  
* **Submission (Id, UserId, TopicId, Content, Date Submitted)**  
* **Evaluation (Id, SubmissionId, Score, Feedback, Date Evaluated)**  
* **Result (Id, UserId, EvaluationId, Status, Date, Score)**

**Class Diagram**

* **Models: User, Topic, Submission, Evaluation, Result**  
* **Services: TopicService, SubmissionService, EvaluationService, ResultService**  
* **Controllers: TopicsController, SubmissionsController, EvaluationsController, ResultsController**

**Sequence Diagram**

1. **User requests a topic → API fetches a topic.**  
2. **User submits response → API stores submission.**  
3. **API sends submission to AI model → AI evaluates response.**  
4. **API stores evaluation and result → User receives feedback.**

**Entity-Relationship Diagram (ERD)**

**\[Diagram illustrating relationships between Users, Topics, Submissions, Evaluations, and Results\]**

---

**4\. API Implementation**

**Repository Pattern & Dependency Injection**

* **Repositories: Encapsulates data access logic**  
* **Services: Implements business logic**  
* **Controllers: Handles API requests and responses**  
* **DTOs: Ensures proper data binding and validation**

**Example DTO for Submission**

**public class SubmissionDto**

**{**

	**public int UserId { get; set; }**

	**public int TopicId { get; set; }**

	**public string Content { get; set; }**

**}**

---

**5\. Validation & Error Handling**

**Validation Rules**

* **Topic Title: Required, max 100 characters**  
* **Submission Content: Required, min 50 characters**

**HTTP Status Codes**

* **200 OK: Successful retrieval**  
* **404 Not Found: Missing entity**  
* **400 Bad Request: Validation error**  
* **204 No Content: Deletion success**  
* **202 Accepted: Update success**  
  ---

**6\. Testing & Debugging**

**Unit Testing**

* **Test topic retrieval, submission storage, evaluation processing.**

**Integration Testing**

* **Ensure API interacts correctly with AI model.**  
  ---

**7\. Error Log & Fixes**

**Identified Errors**

1. **Issue: Submissions not storing correctly.**  
   * **Before: Missing foreign key reference.**  
   * **After Fix: Properly linked Submission to Topic and User.**  
2. **Issue: AI evaluation returning incorrect scores.**  
   * **Before: Mismatch in JSON structure.**  
   * **After Fix: Corrected JSON parsing logic.**

**Screenshots Before & After Fixes \[Images showing errors and fixes\]**

---

**8\. Deployment & Version Control**

**Deployment Steps**

* **Deploy API using Railway hosting service**  
* **Implement CI/CD with GitHub Actions**

**Version Control**

* **Use GitHub for source control**  
* **Branching strategy: main, dev, feature-branches**  
  ---

**9\. Conclusion & Future Enhancements**

**Summary**

**The "Fasih" Web API successfully enables CRUD operations for topic management, submission handling, AI-based evaluation, and result tracking.**

**Future Enhancements**

* **Add user authentication for personalized learning paths.**  
* **Improve AI model for more accurate feedback.**  
* **Implement leaderboard & gamification to enhance engagement.**  
  ---

**End of Document**