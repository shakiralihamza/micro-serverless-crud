import Header from "./components/Header";
import {indigo, purple} from "@mui/material/colors";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import AddTodoDialog from "./components/AddTodoDialog";
import {MyContext} from "./context/MyContext";
import {useState} from "react";
import EditTodoDialog from "./components/EditTodoDialog";

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
    const [todoToEdit, setTodoToEdit] = useState({}); //values to populate textFields when editing todo
    const [todos, setTodos] = useState([]);

    const contextValues ={
        isDialogOpen,
        setIsDialogOpen,
        isEditDialogOpen,
        setIsEditDialogOpen,
        todos,
        setTodos,
        todoToEdit,
        setTodoToEdit
    }
    return (
        <>
            <MyContext.Provider value={contextValues}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Header/>
                    <AddTodo/>
                    <AddTodoDialog/>
                    <EditTodoDialog/>
                    <List/>
                </ThemeProvider>
            </MyContext.Provider>
        </>
    );
}

export default App;
