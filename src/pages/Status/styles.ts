import { makeStyles } from '@material-ui/styles'

export default makeStyles(({
  html: {
    boxSizing: 'border-box'
  },
  '*,\n*:before,\n*:after': {
    boxSizing: 'inherit'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  'header,\nfooter': {
    flex: '0 0 auto'
  },
  main: {
    flex: '1 1 auto'
  },
  'h3,\np,\nul,\nli,\nbody': {
    fontFamily: '\'Roboto\', sans-serif',
    margin: '0',
    padding: '0'
  },
  a: {
    textDecoration: 'none'
  },
  ':root': {
    '-NavHeight': '300px',
    '-NavBackground': 'linear-gradient(to bottom, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.7)),\n    url(assets/header-background.jpg) no-repeat 50% 50%',
    '-HeightFullHistory': '100px',
    '-HeaderJustifyContent': 'space-between',
    '-NavDisplay': 'block',
    '-ColorWhite': '#fff',
    '-ColorBlack': '#131313',
    '-ColorSuccess': '#14c762',
    '-ColorWarning': '#f5a623',
    '-ColorInvestigating': '#f9c032',
    '-ColorError': '#ff1515',
    '-ColorAccent1': '#2db7ba',
    '-ColorTypographyBlack': '#333333',
    '-ColorTypographyGrey': '#aaaaaa',
    '-ColorBackgroundGrey': '#f5f5f5',
    '-ColorBorder': '#e3e3e3',
    '-RadiusCard': '5px',
    '-RadiusTitle': '9px',
    '-FontLarge': '18px',
    '-FontMedium': '16px',
    '-FontSmall': '14px',
    '-FontDetail': '12px',
    '-WrapPadding': '0px 40px',
    '-WrapSidesPadding': '0 40px',
    '-CompanyLogoWidth': '184px',
    '-CompanyLogoHeigth': '118px',
    '-MinWidth': '1200px'
  },
  '@media (max-width: 900px)': {
    ':root': {
      '-NavHeight': '180px',
      '-NavBackground': 'white',
      '-HeightFullHistory': '30px',
      '-NavDisplay': 'none',
      '-WrapPadding': '1rem',
      '-WrapSidesPadding': '0 1rem',
      '-CompanyLogoWidth': '138px',
      '-CompanyLogoHeigth': '88px',
      '-HeaderJustifyContent': 'center'
    }
  },
  nav: {
    display: 'var(--nav-display)'
  },
  h2: {
    backgroundColor: 'var(--color-background-grey)',
    borderRadius: 'var(--radius-title)',
    color: 'var(--color-typography-grey)',
    display: 'inline',
    fontSize: 'var(--font-medium)',
    fontWeight: 'bold',
    margin: '0',
    padding: '5px 8px'
  },
  h1: {
    color: 'var(--color-white)',
    fontSize: 'var(--font-large)',
    margin: '0px'
  },
  button: {
    border: '0',
    cursor: 'pointer',
    fontSize: 'var(--font-small)',
    fontWeight: 'bold'
  },
  '.section-title': {
    display: 'flex',
    margin: '12px'
  },
  '.site-header': {
    background: 'var(--nav-background)',
    backgroundSize: 'cover',
    height: 'var(--nav-height)'
  },
  '.header-wrapper': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'var(--header-justify-content)',
    position: 'relative'
  },
  '.wrap': {
    minWidth: 'var(--min-width)',
    padding: 'var(--wrap-padding)'
  },
  '.wrap-sides': {
    padding: 'var(--wrap-sides-padding)'
  },
  '.company-logo': {
    height: 'var(--company-logo-heigth)',
    width: 'var(--company-logo-width)'
  },
  '.page-wrap': {
    margin: '0 auto',
    maxWidth: '1284px',
    paddingTop: '250px'
  },
  '.current-status': {
    marginBottom: '40px'
  },
  '.past-incidents': {
    marginBottom: '40px'
  },
  '.nav-link': {
    color: 'var(--color-white)',
    fontSize: 'var(--font-medium)',
    padding: '0 24px'
  },
  '.full-history': {
    borderBottom: '1px solid var(--color-border)',
    borderTop: '1px solid var(--color-border)',
    height: 'var(--height-full-history)',
    padding: '28px 112px'
  },
  '.footer-info': {
    backgroundColor: 'var(--color-black)',
    color: 'var(--color-white)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '68px 112px'
  },
  '.socialmedia': {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px 0px'
  },
  '.smicon': {
    padding: '0px 4px'
  },
  '.footer-p': {
    color: 'var(--color-white)'
  },
  '.banner': {
    alignItems: 'center',
    borderRadius: 'var(--radius-card)',
    boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    height: '90px',
    margin: '0px 12px',
    padding: '0px 12px',
    transform: 'translate(0, -50%)'
  },
  '.status-p': {
    color: 'var(--color-white)'
  }
}));