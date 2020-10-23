import { makeStyles } from '@material-ui/styles';

const colorTypographyGrey = '#AAAAAA';
const colorBackgroundGrey = '#F5F5F5';
const fontMedium = '16px';
const radiusTitle = '9px';

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
  pageWrap: {
    margin: '0 auto',
    maxWidth: 900,
  },
  currentStatusSection: {
    marginBottom: '40px'
  },
  pastIncidentsSection: {
    marginBottom: '40px'
  }
});

export default useStyles;
