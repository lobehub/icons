import { ModelIcon, modelMappings } from '@lobehub/icons';
import { Grid } from '@lobehub/ui';

export default () => {
  return (
    <Grid gap={12} width={'100%'}>
      {Object.values(modelMappings).map((item) => {
        const model = item.keywords[0].replace('^', '');
        return <ModelIcon key={model} model={model} size={32} type={'combine'} />;
      })}
    </Grid>
  );
};
