#### to pass the data as prop to the most nested component, we need to make it pass through every component until each reaches the target component(called prop drilling).

#### To improve this we can have a global object, and then we can access that object to get our data to the target component.

#### for this we have Context API, along with other libraries, Redux(for state management),react-Redux and its easier version is Redux-toolkit(RTK).

#### Steps

1. create a UserContext using the createContext form react
2. you must wrap all your data inside the context provider, with the .Provider property of UserContext and pass your values directly to the userContext wrapper

3. You can give access of the context provider to the main or app.jsx according to your wish and usecase

4. import the useContext method from react,to get access to the setUser method from userContextProvider, send the value of your data through the setUser method of userContextProvider

5. get access of your data using useContext from userContext and store in the user variable and display it
