import { makeStyles } from '@material-ui/styles';

const colorError = '#ff1515';
const colorMaintenance = '#646464';
const colorSuccess = '#14c762';
const colorWarning = '#f5a623';
const radiusCard = '5px';

const useStyles = makeStyles({
  serviceCard: {
    alignItems: 'center',
    borderRadius: radiusCard,
    boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    display: 'flex',
    height: '90px',
    justifyContent: 'space-between',
    margin: '12px',
    minWidth: '340px',
    padding: '24px',
    position: 'relative',
    width: '565px',

    '&:hover': {
      boxShadow: '0px 2px 13px rgba(0, 0, 0, 0.15)'
    },
  },
  serviceCardDescription: {
    display: 'block',
    minWidth: '240px'
  },
  icon: {
    height: '28px',
    width: '28px'
  },
  working: {
    fill: colorSuccess
  },
  issues: {
    fill: colorWarning
  },
  notworking: {
    fill: colorError
  },
  busy: {
    fill: colorError
  },
  maintenance: {
    fill: colorMaintenance
  }
});

export default useStyles;
