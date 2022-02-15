import { makeStyles } from '@material-ui/core/styles';

import GridComp from "./components/Grid";
import './App.css';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
}));

function App() {
  const classes = useStyle();

  return (
   <div className={classes.root}>
      <GridComp></GridComp>
    </div> 
  );
}

export default App;
