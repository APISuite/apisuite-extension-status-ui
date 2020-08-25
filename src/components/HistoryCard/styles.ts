import { makeStyles } from '@material-ui/styles';

const colorSuccess = '#14c762';
const colorWarning = '#f5a623';
const radiusCard = '5px';

const useStyles = makeStyles({
  serviceHistoryCard: {
    alignItems: 'center',
    borderRadius: radiusCard,
    boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    display: 'flex',
    height: 'auto',
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
  serviceHistoryCardDescription: {
    display: 'block',
    minWidth: '240px'
  },
  icon: {
    height: '28px',
    width: '28px'
  },
  resolved: {
    fill: colorSuccess
  },
  investigating: {
    fill: colorWarning
  }
});

export default useStyles;
