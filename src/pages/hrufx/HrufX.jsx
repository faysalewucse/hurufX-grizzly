import Table from "./Table";

const HrufX = () => {
  return (
    <div className="p-40">
      <div className="max-w-7xl mx-auto">
        <div className="strokeme">
          <h1 className="text-black  text-center text-6xl font-thin">
            latest thoughts
          </h1>
        </div>
        <div>
          <h1 className="text-white text-4xl font-bold my-10">HURUFx</h1>
          <img
            src={
              "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="blog_image"
          />
        </div>
        <QAA
          title={"What is Business Intelligence?"}
          description={
            "Business Intelligence is the process of using technology to analyze data, transforming it into meaningful information that can inform business decisions. It involves collecting data from various sources, analyzing it, and presenting it in a way that is easy to understand, often through reports, dashboards, and visualizations."
          }
        />
        <QAA
          title={"Data Analytics & Insights"}
          description={
            "We analyze your data to reveal crucial insights about your business operations, customer behavior, and market trends. Our goal is to provide you with a clear understanding of where you stand and where you can go."
          }
        />
        <QAA
          title={"Marketing Intelligence"}
          description={
            "Utilizing BI tools, we refine your marketing efforts to ensure they are as effective as possible. Whether through Above the Line (ATL), Below the Line (BTL), or Through the Line (TTL) marketing strategies, we help you reach your target audience with precision and creativity"
          }
        />
        <QAA
          title={"Strategic Growth Planning"}
          description={
            "With our insights, your business can plan for the future more confidently. We identify opportunities for growth and areas for improvement, guiding you towards strategic decisions that enhance your competitive edge. "
          }
        />
        <QAA
          title={"What is Business Intelligence?"}
          description={
            "Business Intelligence is the process of using technology to analyze data, transforming it into meaningful information that can inform business decisions. It involves collecting data from various sources, analyzing it, and presenting it in a way that is easy to understand, often through reports, dashboards, and visualizations."
          }
        />
      </div>
      <Table />
    </div>
  );
};

export default HrufX;

const QAA = ({ title, description }) => {
  return (
    <div className="text-white my-5">
      <h2 className="text-secondary font-medium text-2xl">{title}</h2>
      <p className="text-xl my-5 leading-8">{description}</p>
    </div>
  );
};