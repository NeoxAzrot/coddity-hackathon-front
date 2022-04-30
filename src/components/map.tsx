import { FC, useState } from 'react';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import theme from 'theme';

import Flex from 'components/layout/flex';
import Text from 'components/layout/text';

import { countryNamesInEnglish, getCountryISO2 } from 'utils/country';
import { addPlusToNumber } from 'utils/numbers';

interface MapProps {
  title: string;
  description: string;
  data: MapData[];
  changeKey: string;
  valueKey: string;
  params: string;
  toolTipText: string;
  colors: string[];
  minValue: number;
  maxValue: number;
}

interface MapData {
  baseline: string;
  horizon: string;
  scenario: string;
  iso_code: string;
  temp_change?: number;
  temp_value?: number;
  pr_change?: number;
  pr_value?: number;
  [key: string]: string | number | undefined;
}

export enum MapDataEnum {
  baseline = 'baseline',
  horizon = 'horizon',
  scenario = 'scenario',
  iso_code = 'iso_code',
  temp_change = 'temp_change',
  temp_value = 'temp_value',
  pr_change = 'pr_change',
  pr_value = 'pr_value',
}

interface StyledScenarioButtonProps {
  active: boolean;
}

const StyledScenarioButton = styled.button<StyledScenarioButtonProps>`
  background-color: ${({ active }) => active && theme.colors.black};
  border: 0.1rem solid ${theme.colors.black};
  color: ${({ active }) => (active ? theme.colors.white : theme.colors.black)};
  cursor: pointer;
  font-family: ${theme.fonts.primary};
  font-size: 1.6rem;
  padding: 0.5rem 3rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  user-select: none;

  &:first-child {
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  &:last-child {
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &:hover {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }
`;

const Map: FC<MapProps> = ({
  title,
  description,
  data,
  changeKey,
  valueKey,
  params,
  toolTipText,
  colors,
  minValue,
  maxValue,
}) => {
  const { t } = useTranslation();

  const [scenario, setScenario] = useState<'126' | '245' | '585'>('126');
  const [horizon, setHorizon] = useState<'2041-2060' | '2081-2100'>('2041-2060');

  const baseline = '19952014';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const filteredData = data.default.filter(
    (d: MapData) =>
      d.baseline === baseline &&
      d.horizon === horizon &&
      d.scenario === scenario &&
      getCountryISO2(d.iso_code) !== undefined,
  );

  const countries = filteredData.map((d: MapData) => {
    const countryISO2 = getCountryISO2(d.iso_code);
    const country = countryNamesInEnglish.of(countryISO2) as string;

    const change = Math.round(Number(d[changeKey] as string) * 1e1) / 1e1;
    const value = Number(d[valueKey] as string);

    switch (valueKey) {
      case MapDataEnum.temp_value:
        return [
          getCountryISO2(d.iso_code),
          change,
          toolTipText
            .replace('%%COUNTRY%%', country)
            .replace('%%CHANGE%%', addPlusToNumber(change).toString())
            .replace('%%VALUE%%', (Math.round(value * 1e1) / 1e1).toString()),
        ];
      case MapDataEnum.pr_value:
        return [
          getCountryISO2(d.iso_code),
          change,
          toolTipText
            .replace('%%COUNTRY%%', country)
            .replace('%%CHANGE%%', addPlusToNumber(change).toString())
            .replace('%%VALUE%%', (Math.round(value * 365 * 1e1) / 1e1).toString()),
        ];
      default:
        return null;
    }
  });

  countries.unshift(['Pays', params, { role: 'tooltip', p: { html: true } }]);

  const options = {
    title: 'Map',
    bar: { groupWidth: '95%' },
    tooltip: { isHtml: true, showTitle: false },
    colorAxis: {
      colors,
      minValue,
      maxValue,
    },
  };

  return (
    <Flex direction="column">
      <Text content={title} fontFamily={theme.fonts.secondary} size="2.2rem" marginTop="5rem" />
      <Text
        dangerouslySetInnerHTML={{ __html: description }}
        size="1.6rem"
        lineHeight="1.8em"
        marginTop="2.5rem"
      />

      <Flex justify="center" marginTop="3rem" marginBottom="1.5rem">
        <Text
          content={t('home.data.buttons.horizon.middle')}
          onClick={() => setHorizon('2041-2060')}
          weight="600"
          size="1.8rem"
          underline={horizon === '2041-2060'}
          color={horizon === '2041-2060' ? theme.colors.primary : theme.colors.black}
          hoverColor={theme.colors.primary}
        />

        <Text
          content={t('home.data.buttons.horizon.future')}
          onClick={() => setHorizon('2081-2100')}
          marginLeft="3rem"
          weight="600"
          size="1.8rem"
          underline={horizon === '2081-2100'}
          color={horizon === '2081-2100' ? theme.colors.primary : theme.colors.black}
          hoverColor={theme.colors.primary}
        />
      </Flex>

      <Chart chartType="GeoChart" width="100%" height="60rem" data={countries} options={options} />

      <Flex direction="column" align="center" marginTop="3rem" marginBottom="1rem">
        <Text
          content={t('home.data.buttons.scenario.title')}
          size="1.6rem"
          weight="600"
          marginBottom="0.5rem"
        />

        <Flex justify="center">
          <StyledScenarioButton onClick={() => setScenario('126')} active={scenario === '126'}>
            {t('home.data.buttons.scenario.soon')}
          </StyledScenarioButton>

          <StyledScenarioButton onClick={() => setScenario('245')} active={scenario === '245'}>
            {t('home.data.buttons.scenario.middle')}
          </StyledScenarioButton>

          <StyledScenarioButton onClick={() => setScenario('585')} active={scenario === '585'}>
            {t('home.data.buttons.scenario.future')}
          </StyledScenarioButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Map;
