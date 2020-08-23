import { makeStyles } from '@material-ui/styles'

export default makeStyles(({
  '.service-accordion-button': {
    backgroundColor: '#eee',
    borderRadius: '7.5px 7.5px 0 0',
    border: 'none',
    color: 'rgb(92, 90, 90)',
    cursor: 'pointer',
    display: 'block',
    fontSize: '18px',
    marginBottom: '12.5px',
    minWidth: '340px',
    outline: 'none',
    padding: '18px',
    textAlign: 'left',
    transition: '0.4s',
    width: '586.5px'
  },
  '.service-accordion-button:hover': {
    backgroundColor: '#ccc'
  },
  '.service-accordion-button:after': {
    color: 'rgb(92, 90, 90)',
    content: '\'(click to show/hide all incidents)\'',
    cssFloat: 'right',
    fontSize: '10px',
    fontWeight: 'lighter',
    marginLeft: '5px'
  },
  '.service-accordion-contents': {
    marginBottom: '35px',
    transition: 'max-height 0.2s ease-out'
  }
}));