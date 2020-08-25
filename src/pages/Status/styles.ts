import { makeStyles } from '@material-ui/styles';

const colorTypographyGrey = '#AAAAAA';
const colorBackgroundGrey = '#F5F5F5';
const fontMedium = '16px';
const minWidth = '1200px';
const radiusTitle = '9px';
const wrapPadding = '0px 40px';

const useStyles = makeStyles({
  sectionTitle: {
    backgroundColor: colorBackgroundGrey,
    borderRadius: radiusTitle,
    color: colorTypographyGrey,
    display: 'inline',
    fontSize: fontMedium,
    fontWeight: 'bold',
    margin: '0',
    padding: '5px 8px'
  },
  sectionTitleContainer: {
    display: 'flex',
    margin: '12px'
  },
  wrap: {
    minWidth: minWidth,
    padding: wrapPadding
  },
  pageWrap: {
    margin: '0 auto',
    maxWidth: '1284px',
    paddingTop: '250px'
  },
  currentStatusSection: {
    marginBottom: '40px'
  },
  pastIncidentsSection: {
    marginBottom: '40px'
  }
});

export default useStyles;
