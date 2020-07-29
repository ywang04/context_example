import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import { withLanguageContext } from './Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';

class Navbar extends Component {
  static contextType = ThemeContext;
  renderToolBar = (value, classes, toggleTheme) => {
    const words = {
      english: {
        appTitle: 'AppTitle',
        search: '123',
      },
      french: {
        appTitle: 'AppTitle1',
        search: '456',
      },
      spanish: {
        appTitle: 'AppTitle2',
        search: '789',
      },
    };
    const { language } = value;
    const { appTitle, search } = words[language];
    return (
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit">
          <span>🇫🇷</span>
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit">
          {appTitle}
        </Typography>
        <Switch onChange={toggleTheme} />
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder={search}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
    );
  };
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
          <LanguageContext.Consumer>
            {value => this.renderToolBar(value, classes, toggleTheme)}
          </LanguageContext.Consumer>
        </AppBar>
      </div>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
