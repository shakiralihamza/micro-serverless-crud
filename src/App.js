import Header from "./components/Header";
import {indigo, purple} from "@mui/material/colors";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import AddTodoDialog from "./components/AddTodoDialog";
import {MyContext} from "./context/MyContext";
import {useState} from "react";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: indigo,
        secondary: purple
    }
})

function App() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [todos, setTodos] = useState([]);

    const contextValues ={
        isDialogOpen,
        setIsDialogOpen,
        isEditDialogOpen,
        setIsEditDialogOpen,
        todos,
        setTodos
    }
    return (
        <>
            <MyContext.Provider value={contextValues}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Header/>
                    <AddTodo/>
                    <AddTodoDialog/>
                    <List/>
                </ThemeProvider>
            </MyContext.Provider>
        </>
    );
}

export default App;
