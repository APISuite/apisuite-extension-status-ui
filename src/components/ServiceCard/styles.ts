import { makeStyles } from '@material-ui/styles'

export default makeStyles(({
  '.service-card': {
    alignItems: 'center',
    borderRadius: 'var(--radius-card)',
    boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    display: 'flex',
    height: '90px',
    justifyContent: 'space-between',
    margin: '12px',
    minWidth: '340px',
    padding: '24px',
    position: 'relative',
    width: '565px'
  },
  '.service-card:hover': {
    boxShadow: '0px 2px 13px rgba(0, 0, 0, 0.15)'
  },
  '.service-card-description': {
    display: 'block',
    minWidth: '240px',
    h3: {
      color: 'var(--color-typography-black)',
      fontSize: 'var(--font-large)',
      fontWeight: 'bold',
      padding: '5px 0'
    },
    p: {
      color: 'var(--color-typography-grey)',
      fontSize: 'var(--font-small)',
      padding: '5px 0'
    }
  },
  '.icon': {
    height: '28px',
    width: '28px'
  },
  '.icon-small': {
    height: '18px',
    width: '18px'
  },
  '.icon-large': {
    height: '24px',
    width: '24px'
  },
  '.working': {
    fill: 'var(--color-success)'
  },
  '.working-banner': {
    backgroundColor: 'var(--color-success)'
  },
  '.issues': {
    fill: 'var(--color-warning)'
  },
  '.issues-banner': {
    backgroundColor: 'var(--color-warning)'
  },
  '.notworking': {
    fill: 'var(--color-error)'
  },
  '.notworking-banner': {
    backgroundColor: 'var(--color-error)'
  },
  '.busy': {
    fill: 'var(--color-error)'
  },
  '.maintenance': {
    fill: '#646464'
  }
}));