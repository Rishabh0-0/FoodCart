import React from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Meal
          title={"Melting Cheese Pizza"}
          price={10.99}
          imageUrl={
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          }
          calories={44}
          time={20}
        />
      </main>
    </div>
  );
};

export default App;
