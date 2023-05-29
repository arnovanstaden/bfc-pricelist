import { Chip, Typography } from '@my-mui/material';
import styles from '../styles.module.scss';
import { ITreatment } from '@lib/supabase/types';
import classNames from 'classnames';
import { Edit } from '@my-mui/icons-material';
import { IconButton } from '@my-mui/material';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

interface IProps {
  treatment: ITreatment;
  admin?: boolean;
}

const Treatment = ({ treatment, admin }: IProps): JSX.Element | null => {
  const classes = classNames(
    styles.Item,
    admin && styles.admin
  );

  return (
    <div className={classes}>
      <div className={styles.top}>
        <div>
          <div className={styles.name}>
            <Typography variant="h5">{treatment.name}</Typography>
            {treatment.range && <Chip label={treatment.range} size="small" />}
          </div>
          <Typography variant="subtitle1" className={styles.brand}>{treatment.brand}</Typography>
        </div>

        <div className={styles.price}>
          <Typography variant="h6">R {treatment.price}</Typography>
          <Typography variant="caption" className={styles.unit}>{treatment.unit}</Typography>
        </div>

        {admin && (
          <div className={styles.actions}>
            <Link href={`/dashboard/treatments/${treatment.id}`}>
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
            <DeleteButton id={treatment.id} />
          </div>
        )}
      </div>

      {!admin && (
        <Typography variant="body1" paragraph className={styles.description}>
          {treatment.description}
        </Typography>
      )}
    </div>
  )
};

export default Treatment;
