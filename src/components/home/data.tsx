import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import theme from 'theme';

import Flex from 'components/layout/flex';
import Text from 'components/layout/text';
import Map, { MapDataEnum } from 'components/map';

import * as dataPrecip from 'data/precip.json';
import * as dataTemp from 'data/temp.json';

import { useViewport } from 'hooks/useViewport';

const Data: FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  return (
    <Flex direction="column" id="data" marginTop={isMobile ? '10rem' : '15rem'}>
      <Text
        content={t('home.data.title')}
        fontFamily={theme.fonts.secondary}
        size="2.2rem"
        weight="600"
        uppercase
        type="h2"
      />

      <Map
        title={t('home.data.temp.subtitle')}
        description={t('home.data.temp.description')}
        data={dataTemp}
        toolTipText={t('home.data.temp.tooltip')}
        changeKey={MapDataEnum.temp_change}
        valueKey={MapDataEnum.temp_value}
        params={t('home.data.temp.params')}
        colors={[
          '#F4F2E9',
          '#F2E9C0',
          '#F0E093',
          '#EDD86A',
          '#DCB45F',
          '#CC8D50',
          '#BE6644',
          '#B24038',
          '#842721',
        ]}
        minValue={1}
        maxValue={8}
      />

      <Map
        title={t('home.data.precip.subtitle')}
        description={t('home.data.precip.description')}
        data={dataPrecip}
        toolTipText={t('home.data.precip.tooltip')}
        changeKey={MapDataEnum.pr_change}
        valueKey={MapDataEnum.pr_value}
        params={t('home.data.precip.params')}
        colors={[
          '#F3E9BB',
          '#F4F2E8',
          '#E0DFE9',
          '#A5A5BD',
          '#6D7395',
          '#535D84',
          '#3A4974',
          '#213966',
        ]}
        minValue={-10}
        maxValue={50}
      />
    </Flex>
  );
};

export default Data;
