import * as React from 'react';
import { SVGProps } from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg
            width={234.532}
            height={20.475}
            viewBox="0 0 62.053 5.417"
            {...props}
        >
            {/* <g
                aria-label="Admin Panel"
                style={{
                    lineHeight: 1.25,
                }}
                fontWeight={400}
                fontSize={7.056}
                fontFamily="Permanent Marker"
                letterSpacing={0}
                wordSpacing={0}
                strokeWidth={0.265}
                fill={theme.palette.secondary.light}
            >
                <path d="M.227 3.659Q.124 3.652.062 3.61 0 3.562 0 3.486q0-.068.062-.124.041-.103.083-.165L.24 3.06q.07-.096.138-.193.069-.096.152-.193.04-.034.068-.048.076-.055.152-.103.076-.055.172-.09.173-.062.338-.062.165-.007.282 0 .097.007.18.02.09.008.151.022.103.048.165.09.07.04.131.096.076.04.118.09.048.04.082.089.02.027.083.09.062.061.151.061.083 0 .138-.075.062-.076.124-.131.055-.145.18-.22.055-.028.089-.035l.076-.014q.02-.007.041-.007l.035-.014.075-.007h.09q.117-.034.207-.034.103.007.165.055.062.041.062.117 0 .076-.062.124-.041.11-.09.172-.04.062-.09.131l-.137.193q-.069.097-.158.193-.028.035-.07.048-.068.056-.144.11-.076.049-.172.083-.18.062-.345.07-.158 0-.275-.008l-.186-.013q-.083-.014-.152-.028-.096-.048-.165-.09-.07-.04-.131-.09-.076-.047-.117-.089-.042-.048-.076-.096-.02-.028-.09-.09-.069-.069-.144-.062-.076.007-.145.083-.062.069-.124.124-.041.138-.172.22-.056.028-.097.035l-.069.014-.041.013q-.02 0-.035.007l-.075.007h-.09q-.117.035-.207.035zM4.417 3.225q.007-.028.027-.021.028 0 .048-.007-.055-.055-.068-.145-.014-.096-.07-.158.014-.035.021-.069.014-.034.062-.028-.02-.151.007-.282.028-.131.083-.248.062-.117.138-.228.082-.117.158-.234.062-.014.076.014.014.02.048-.014.11-.076.152-.165.041-.097.041-.207.062-.179.138-.351.083-.18.186-.331.103-.152.22-.262.118-.117.255-.179.097-.083.242-.152.151-.068.316-.103.173-.041.352-.041.179-.007.33.034.035.014.042-.014Q7.228 0 7.255 0q.345.041.614.138.275.096.468.269.131.206.248.447.117.235.18.496.068.255.061.531-.007.276-.117.551-.241.303-.585.49-.345.179-.745.303-.392.117-.82.193-.42.075-.82.165.007.186 0 .4-.006.206-.048.42-.034.207-.11.406-.069.2-.193.372-.138-.006-.29.028-.144.034-.261.069l-.11-.069q-.049-.028-.124-.034.02-.083-.042-.173-.055-.09-.117-.172-.055-.09-.076-.172-.013-.09.083-.159-.055-.048-.055-.151.028.027.069.027-.014-.124.027-.296.049-.172.076-.338.035-.172.014-.31-.02-.144-.165-.206zm1.791-1.613l-.048.138q-.014.055-.035.103-.02.049-.048.097l-.048.11q.014.042.055.062.041.02.055.062.097-.048.193-.069.097-.027.193-.041.096-.014.193-.035.096-.02.2-.068.103-.049.213-.076l.228-.07q.11-.034.213-.075.104-.048.18-.124-.097-.09-.29-.158-.193-.07-.42-.083-.22-.02-.448.028-.22.048-.386.2zM12.506 3.1q-.007.083.013.16.021.075.049.15.034.07.062.145.027.076.041.152.014.096 0 .214-.014.11-.048.22-.035.103-.09.193-.055.083-.13.124-.097.124-.235.193-.138.069-.255.165-.076.048-.172.07l-.186.04q-.076.042-.18.09l-.213.083q-.11.034-.22.055-.11.014-.193.007-.207.076-.407.096-.193.028-.455-.027-.248.034-.461-.021-.207-.055-.372-.172-.159-.124-.283-.29-.117-.172-.193-.358-.055-.393.028-.71.083-.323.234-.592.159-.276.358-.503.2-.234.386-.455.042.014.062 0 .028-.02.048-.048.021-.035.042-.062.027-.028.062-.035.048-.103.138-.151.096-.055.151-.152.062-.014.104-.041.04-.028.075-.062.042-.035.083-.062.041-.035.097-.048v-.076q.124-.055.179-.124l.144-.18q.062-.006.097-.006.041 0 .117-.014.055-.096.096-.145.049-.048.138-.103.083.041.18.055.103.014.178.09.007.069.042.11.034.034.076.069.041.027.075.062.042.034.056.096.027.007.034-.007.014-.013.041-.007.021.097.049.131.027.028.055.117-.035.07-.055.145-.014.07-.083.104-.007.048.027.055.035 0 .042.034.007.062-.02.09.164.268.295.572.131.296.297.565zm-.862.655q.028-.076.07-.124.048-.048.054-.145-.034-.055-.04-.082-.008-.035-.008-.104-.151-.213-.262-.454-.11-.248-.248-.462-.013.028-.048.055-.034.028-.076-.014-.013.055-.048.083-.034.02-.076.02-.041-.006-.09-.02-.04-.02-.075-.048-.2.158-.4.31-.2.151-.358.351-.028.014-.034.014-.007-.007-.042.007-.055.13-.138.241-.075.103-.151.214-.076.11-.131.234-.055.124-.062.29.117.096.276.116.158.021.323.007.173-.013.331-.041.165-.034.303-.034.29-.07.496-.18.207-.117.434-.234zM12.898 2.067q.049-.145.152-.248.11-.103.234-.172.131-.076.269-.124t.262-.083q.275-.117.585-.22.317-.11.641-.193.331-.083.676-.104.344-.027.723.083.02.069.062.13l.083.125q.048.062.082.124.035.055.042.117.069.062.11.138.041.069.014.186-.07.055-.138.103-.062.042-.138.076-.255-.062-.517-.041-.261.02-.468.034-.062-.062-.152-.062-.082 0-.179.028l-.186.055q-.09.027-.172.014-.07.055-.172.075-.097.014-.214.028-.007.034.014.048.02.007.007.042.041.048.103.068l.138.042q.076.02.13.055.056.027.076.096.104 0 .18.049.075.048.124.117.048.069.069.151.027.076.027.138.02.055.048.048.028-.007.062.028.021.09.104.186.082.09.13.2.014.172.021.31.007.13-.048.269-.103.254-.29.454-.178.2-.413.359-.227.151-.489.261-.262.11-.51.186-.027-.006-.055 0-.027.007-.014-.034-.055.048-.124.062-.062.014-.138.007-.075 0-.158-.007-.076-.007-.145.007-.048-.048-.09-.097-.034-.04-.054-.11-.035 0-.035-.034.007-.035-.02-.035.04-.069.034-.076 0-.013-.02-.02l-.028-.014q-.014-.014-.007-.034.027-.056.02-.124l-.013-.152q-.007-.076.007-.145.02-.069.103-.11.234.028.44-.014.215-.048.4-.13.187-.083.352-.18.172-.096.338-.172.02-.062.055-.103.041-.042.082-.076.042-.035.076-.076.035-.041.048-.103.007-.049-.027-.055-.028-.014-.028-.056l-.076-.02q-.13-.076-.296-.124-.165-.055-.282-.117-.076.04-.145.02-.062-.02-.165-.041-.235-.014-.455-.048-.214-.035-.414-.124-.013-.035-.034-.062-.02-.028-.076-.014-.041-.055-.082-.103-.042-.056-.076-.118.014-.082.02-.137.007-.062-.04-.118.027-.09.04-.144.014-.055 0-.145z" />
                <path d="M19.988 1.853q-.172 0-.372.028-.2.02-.392.048-.138.02-.27.035-.123.013-.226.02-.049.152-.097.27-.048.116-.103.226-.055.118-.104.242-.041.117-.082.255-.07.11-.117.206-.042.09-.07.207-.082.103-.123.22-.042.11-.062.193l-.028.083q-.041.041-.048.069-.007.02-.035.041-.007.076-.048.152-.014.034-.02.069-.007.027-.007.041 0 .069-.035.09.007.034 0 .075l-.014.07q-.02.082-.013.13l.034.049q.02.02.028.055.04.027.062.034.027.02.082.048l.062.07q.035.199-.062.316-.103.131-.351.131h-.083q-.034-.034-.041-.055l-.09-.034q-.034-.014-.062-.056-.09-.04-.144-.068l-.062-.035v-.083q-.049-.062-.076-.137-.02-.076-.035-.152-.013-.062-.034-.117-.014-.055-.041-.097-.014-.4.075-.675.09-.275.186-.53l.11-.276q.056-.145.097-.296l.062-.07.076-.178.069-.152q.02-.048.034-.09l.035-.082q-.042 0-.076.007-.035 0-.069.007l-.076.013h-.069q-.048 0-.069-.006-.075.034-.165.034H17.019q-.014-.007-.028-.007-.069 0-.11.02h-.228q-.013 0-.034.008h-.034q-.049 0-.104-.007-.055-.014-.117-.048-.082-.11-.11-.118l-.062-.082q-.007-.042-.02-.076-.014-.041-.028-.09-.028-.069-.055-.144-.021-.083-.021-.193.007-.055.028-.083l.034-.048.02-.104.09.007h.193q.22 0 .448-.013l.469-.042.275-.027.296-.028q.028-.062.056-.117l.068-.034q.124-.007.173.034.055.034.09.069l.302-.028q.159-.02.317-.048.235-.034.469-.062.241-.027.462-.027.096 0 .186.006.09.007.165.021l.069.048q.02.042.055.076l.083.069q.082.076.165.18.083.103.062.302-.055.083-.083.097l-.062.082-.069-.006q-.04 0-.075.013-.035.007-.07.021l-.054.028-.062.013h-.104q-.034-.007-.076-.007z" />
                <path d="M23.303 1.288q.007.049 0 .076 0 .02-.007.042v.048q0 .02.014.069-.145.234-.338.324-.186.082-.407.124-.22.034-.454.075-.228.042-.455.18-.09-.035-.166 0-.068.034-.206.02-.042.042-.104.062-.062.014-.124.035.028.062.021.13 0 .063.02.104.242.02.531-.007.297-.028.58-.034.006.034-.008.048-.014.007-.007.034.049.035.097.09l.096.096q.048.049.097.083.055.028.124.02.027.056.034.125.014.062-.014.13-.11.076-.22.159-.11.076-.234.138-.118.062-.255.103-.131.035-.297.028h-.055q-.014 0-.041-.02-.055.034-.159.02-.096-.014-.151.02-.076-.034-.186-.027-.104 0-.186-.028-.11.145-.2.31-.09.166-.159.352.235.034.386.027.159-.007.297-.02.137-.021.282-.035.145-.02.365-.014.138-.075.324-.096.193-.028.352-.083.055.021.096.076.041.048.076.097.041.04.082.075.042.035.104.028.027.027.034.069.014.034.02.069.008.034.022.062.02.02.062.013-.104.228-.242.352-.13.117-.303.179-.172.062-.386.096-.206.035-.461.083-.062.014-.104-.007-.04-.014-.096-.014-.158.035-.379.062-.22.028-.448.021-.227-.007-.434-.062-.207-.048-.338-.179-.055-.048-.075-.11-.014-.07-.09-.104-.007-.09-.027-.2l-.042-.227q-.02-.124-.034-.24-.007-.118.014-.215.02-.103.082-.186.07-.082.048-.179.035-.007.042-.034.007-.035.055-.028.041-.124.09-.234.048-.11.096-.214.055-.103.103-.206.055-.11.104-.241-.097-.09-.145-.193-.041-.11-.062-.214-.02-.11-.035-.22-.013-.118-.048-.235.07-.103.166-.165.103-.069.22-.11.117-.042.255-.07.138-.027.29-.061.275-.09.489-.138.22-.048.427-.076.213-.034.44-.062.228-.027.518-.083.062.062.117.062.027-.062.062-.034.041.02.034-.041.07.117.172.2.11.075.242.13zM24.185 4.451q-.076.276-.138.42-.055.138-.172.29-.09-.014-.125.02-.034.035-.075.062-.062.014-.09 0-.027-.013-.048-.034-.02-.014-.055-.034-.028-.014-.09-.014-.014-.055-.034-.104-.014-.048-.09-.034.014-.055.007-.09-.007-.041-.02-.069l-.014-.062q-.007-.034.007-.082-.035 0-.056-.048-.02-.049-.048-.097.02-.124.042-.234.02-.11.048-.207.034-.096.055-.193.02-.096-.02-.2.027.021.04-.007.014-.034.021-.082.007-.055.007-.104 0-.055-.007-.09.07-.178.11-.364.049-.193.083-.38.041-.185.083-.364.041-.18.11-.331.076-.014.165.02.097.028.118.076.179-.138.317-.33.137-.2.282-.386.145-.186.317-.331.18-.145.448-.172.138.103.303.213.172.104.282.276.056.027.09.062.041.028.097.062v.083q.082.075.13.179.056.096.097.213l.083.228q.04.11.096.213-.014.035-.014.062 0 .021.007.049.014.027.02.055.008.027 0 .076-.02.303-.199.489-.172.186-.42.31-.248.117-.53.2-.283.082-.51.179 0 .027.02.027.028 0 .02.035.166.103.262.165.097.062.18.103.09.042.186.076.103.028.282.07.18.04.276.068.103.02.186.041l.165.028.248.02q.062.063.104.152.048.083.062.172.013.083.006.166-.006.076-.048.124.007.02.028.02.027-.006.055 0-.041.028-.069.07l-.055.082q-.028.041-.062.069-.035.034-.097.041-.213.083-.537.007-.324-.069-.82-.262-.248-.096-.406-.165-.152-.076-.27-.145-.11-.075-.206-.158l-.22-.2zm.985-2.363q-.076.11-.172.2-.09.09-.18.186-.082.09-.151.206-.069.11-.097.262.242-.027.503-.13.262-.111.496-.208-.027-.213-.151-.344-.117-.13-.248-.172zM27.01 2.067q.048-.145.151-.248.11-.103.234-.172.131-.076.27-.124.137-.048.26-.083.277-.117.587-.22.317-.11.64-.193.331-.083.676-.104.344-.027.723.083.02.069.062.13l.083.125q.048.062.082.124.035.055.042.117.069.062.11.138.041.069.014.186-.07.055-.138.103-.062.042-.138.076-.255-.062-.517-.041-.261.02-.468.034-.062-.062-.152-.062-.082 0-.179.028l-.186.055q-.09.027-.172.014-.069.055-.172.075-.097.014-.214.028-.007.034.014.048.02.007.007.042.041.048.103.068l.138.042q.076.02.13.055.056.027.077.096.103 0 .179.049.076.048.124.117t.069.151q.027.076.027.138.02.055.048.048.028-.007.062.028.021.09.104.186.083.09.13.2.015.172.021.31.007.13-.048.269-.103.254-.29.454-.178.2-.413.359-.227.151-.489.261-.262.11-.51.186-.027-.006-.055 0-.027.007-.014-.034-.055.048-.124.062-.062.014-.137.007-.076 0-.159-.007-.076-.007-.145.007-.048-.048-.09-.097-.034-.04-.054-.11-.035 0-.035-.034.007-.035-.02-.035.04-.069.034-.076 0-.013-.02-.02l-.028-.014q-.014-.014-.007-.034.027-.056.02-.124l-.013-.152q-.007-.076.007-.145.02-.069.103-.11.234.028.441-.014.214-.048.4-.13.186-.083.351-.18.172-.096.338-.172.02-.062.055-.103.041-.042.082-.076.042-.035.076-.076.035-.041.048-.103.007-.049-.027-.055-.028-.014-.028-.056l-.075-.02q-.131-.076-.297-.124-.165-.055-.282-.117-.076.04-.145.02-.062-.02-.165-.041-.235-.014-.455-.048-.214-.035-.413-.124-.014-.035-.035-.062-.02-.028-.076-.014-.041-.055-.082-.103-.042-.056-.076-.118.014-.082.02-.137.007-.062-.04-.118.027-.09.04-.144.014-.055 0-.145zM32.797 3.535q0-.076.021-.138.02-.062.007-.159.213-.454.482-.84.276-.393.655-.69.062-.047.096-.096.042-.055.076-.103.041-.048.09-.083.048-.041.124-.055.172-.2.413-.365.241-.165.503-.317t.524-.31q.268-.159.482-.345.076.049.117.035.048-.02.097-.007.062.13.158.186.103.048.207.103.11.049.2.124.096.07.144.193-.048 0-.048.035.007.034.02.076.014.04.014.075 0 .035-.062.035 0 .048.049.048.048 0 .048.048 0 .042-.02.07-.015.02 0 .075-.166.11-.373.214l-.427.206q-.22.11-.455.241-.227.124-.455.29-.227.165-.461.365-.228.2-.441.427-.214.22-.4.462-.186.234-.317.461.014.035.035.062.027.028.041.063.262.013.49 0 .227-.021.454.027.028-.02.034-.055.007-.035.042-.048.468-.049.875-.152.406-.11.827-.22-.124-.049-.22-.076-.042-.041 0-.069.047-.034.075-.069-.11-.062-.186-.165-.069-.104-.083-.269.049-.041.049-.096 0-.056-.049-.09-.034-.014-.041 0l-.014.027q0 .014-.014.028-.007.014-.034 0 .007-.076.034-.124.028-.048.042-.117l.572-.38q.09.07.22.146.131.075.276.151.144.076.296.159.152.075.282.151.125.055.214.138.09.076.172.165l.166.166q.082.082.2.138-.014.11.013.179.028.069.014.165-.13.234-.317.4-.186.158-.42.275-.228.117-.49.2-.261.076-.537.152-.275.069-.558.151-.276.076-.544.18-.117 0-.2.006-.083.007-.159.021l-.151.028q-.076.013-.165.02-.035-.007-.049.014-.007.02-.027.035-.138.02-.248.02h-.186q-.097 0-.2.028-.104.027-.193.02-.62-.027-.972-.44-.351-.414-.385-1.137.006-.035-.014-.042-.02-.014-.035-.027z" />
                <path d="M42.01 4.589q-.042.117-.125.241-.075.117-.186.214-.103.09-.234.151-.13.062-.275.07-.09-.022-.124-.05-.028-.02-.062-.04-.021-.014-.042-.021-.014-.014-.027-.02l-.083-.035.028-.09q.013-.055-.007-.083-.021-.034-.083-.09l-.041-.04q-.021-.021-.035-.042l-.117-.13.186-.049q.172-.048.227-.124.062-.076.049-.255-.138-.027-.235-.007-.09.02-.186.048-.124.035-.255.062-.124.021-.275.021h-.104l-.103-.014-.069-.013q-.014-.076-.027-.083l-.028-.028q-.034-.034-.076-.09-.034-.061-.013-.15-.035-.063-.042-.125-.041.083-.062.172l-.027.07-.07.013q-.013.007-.02.035-.007.02-.007.034l-.034.117-.028.028q-.014.007-.027.02-.014.062-.035.124-.02.062-.041.118-.035.09-.062.179-.02.082-.014.165l-.028.076q-.034.041-.075.069l-.083.041q-.014.014-.041.028l-.035.013-.02.076-.083.014-.11.02q-.028.008-.07.008l-.068-.007-.117-.097q-.042-.041-.097-.076-.062-.082-.069-.124l-.014-.075q-.013-.042-.013-.07-.007-.027-.021-.04l-.09-.083.076-.062.007-.117q.138-.352.29-.676l.323-.661q.056-.11.104-.22l.11-.221q-.007-.02-.007-.048t.014-.062q.076-.118.124-.207l.096-.193q.055-.117.11-.227.063-.11.152-.228l.11-.048.049-.014q.027-.014.062-.014l.103.014q.193-.09.338-.248.144-.165.296-.393l.069-.096.09.055q.034.02.096.041.062.014.13.035.125.027.235.062.11.034.18.103.04.11.047.166.007.055.021.11.02.117.035.234.02.117.027.262.035.117.055.234.028.11.048.228l.07.323q.034.152.089.29.055 0 .069.007.034-.014.069-.021l.09-.014.075-.007.028.07q.007.034.069.068.09.007.13.042.042.027.076.062.028.027.055.04l.104.042-.055.104q-.07.124-.2.24-.124.111-.283.187.007.041.007.082.007.035.02.076.022.117.035.241.014.124 0 .255zm-1.992-1.192q.207-.014.372-.028.173-.02.38-.062-.049-.206-.104-.427-.055-.227-.117-.448l-.042.07q-.137.144-.268.323-.124.18-.214.338l-.083.124q-.04.062-.075.124.041-.007.075-.007.042 0 .076-.007zM44.29 5.092q-.193.062-.42.124-.228.062-.455.062-.344 0-.544-.172-.035-.076-.062-.104l-.042-.055q-.013-.034-.02-.09-.083-.096-.131-.22-.048-.13-.07-.262-.013-.138-.006-.275.014-.138.048-.262.014-.028.014-.055l.014-.062q.027-.11.055-.214.034-.103.09-.179-.028-.062 0-.138.027-.076.061-.138.097-.261.159-.44.069-.187.138-.366.117-.31.22-.613.104-.303.186-.655.055-.034.083-.048.041-.014.069-.02.124.062.29.124.165.055.275.055.055.034.069.055l.027.027q.076.09.131.186.055.09.035.242-.042.062-.062.062-.035.137-.076.234-.035.096-.076.193-.048.103-.09.206-.04.104-.068.255-.028.035-.042.062-.007.028-.02.062-.014.035-.035.076-.014.035-.048.062-.02.18-.069.29-.041.11-.09.22-.082.2-.151.4-.062.2-.076.454.035-.013.062-.013h.062q.062 0 .145.02.207-.11.448-.13.248-.021.489-.028H45q.096 0 .179-.014.062.035.076.041h.055q.048 0 .083.007.082.076.158.11.076.035.159.063.075.027.144.062.076.027.145.082l.048.297q.048.062.041.082 0 .055-.027.083l.014.076q-.104.02-.145.048-.034.027-.069.062-.055.007-.083.007h-.04q-.097 0-.235.034-.186-.062-.386-.062-.076 0-.159.007l-.165.014q-.083.014-.172.02-.083.008-.172.008zM50.25 3.1q-.007.083.014.16.02.075.048.15.035.07.062.145.028.076.041.152.014.096 0 .214-.013.11-.048.22-.034.103-.09.193-.054.083-.13.124-.097.124-.235.193-.137.069-.254.165-.076.048-.173.07l-.186.04q-.076.042-.179.09l-.213.083q-.11.034-.221.055-.11.014-.193.007-.207.076-.406.096-.193.028-.455-.027-.248.034-.462-.021-.207-.055-.372-.172-.158-.124-.282-.29-.118-.172-.193-.358-.055-.393.027-.71.083-.323.235-.592.158-.276.358-.503.2-.234.386-.455.041.014.062 0 .027-.02.048-.048.02-.035.041-.062.028-.028.062-.035.048-.103.138-.151.097-.055.152-.152.062-.014.103-.041.041-.028.076-.062.041-.035.082-.062.042-.035.097-.048v-.076q.124-.055.18-.124l.144-.18q.062-.006.096-.006.042 0 .117-.014.056-.096.097-.145.048-.048.138-.103.082.041.179.055.103.014.179.09.007.069.041.11.035.034.076.069.041.027.076.062.041.034.055.096.028.007.034-.007.014-.013.042-.007.02.097.048.131.028.028.055.117-.034.07-.055.145-.014.07-.083.104-.007.048.028.055.034 0 .041.034.007.062-.02.09.165.268.296.572.13.296.296.565zm-.861.655q.027-.076.069-.124.048-.048.055-.145-.035-.055-.041-.082-.007-.035-.007-.104-.152-.213-.262-.454-.11-.248-.248-.462-.014.028-.048.055-.035.028-.076-.014-.014.055-.048.083-.035.02-.076.02-.042-.006-.09-.02-.041-.02-.076-.048-.2.158-.4.31-.2.151-.358.351-.027.014-.034.014-.007-.007-.041.007-.055.13-.138.241-.076.103-.152.214-.076.11-.13.234-.056.124-.063.29.118.096.276.116.158.021.324.007.172-.013.33-.041.166-.034.304-.034.29-.07.496-.18.207-.117.434-.234zM51.78 4.451q-.076.276-.138.42-.055.138-.172.29-.09-.014-.124.02-.035.035-.076.062-.062.014-.09 0-.027-.013-.048-.034-.02-.014-.055-.034-.028-.014-.09-.014-.013-.055-.034-.104-.014-.048-.09-.034.014-.055.007-.09-.007-.041-.02-.069l-.014-.062q-.007-.034.007-.082-.034 0-.055-.048-.02-.049-.048-.097.02-.124.04-.234.022-.11.05-.207.034-.096.054-.193.02-.096-.02-.2.027.021.04-.007.015-.034.022-.082.007-.055.007-.104 0-.055-.007-.09.068-.178.11-.364.048-.193.082-.38l.083-.364q.041-.18.11-.331.076-.014.166.02.096.028.117.076.179-.138.317-.33.138-.2.282-.386.145-.186.317-.331.18-.145.448-.172.138.103.303.213.173.104.283.276.055.027.09.062.04.028.096.062v.083q.083.075.13.179.056.096.097.213.042.11.083.228.041.11.097.213-.014.035-.014.062 0 .021.007.049.014.027.02.055.007.027 0 .076-.02.303-.2.489-.172.186-.42.31-.248.117-.53.2-.283.082-.51.179 0 .027.02.027.028 0 .021.035.166.103.262.165.097.062.18.103.089.042.185.076.104.028.283.07.179.04.275.068.104.02.186.041l.166.028.248.02q.062.063.103.152.048.083.062.172.014.083.007.166-.007.076-.048.124.007.02.028.02.027-.006.055 0-.042.028-.07.07l-.054.082q-.028.041-.062.069-.035.034-.097.041-.213.083-.537.007-.324-.069-.82-.262-.248-.096-.407-.165-.151-.076-.268-.145-.11-.075-.207-.158l-.22-.2zm.985-2.363q-.076.11-.172.2-.09.09-.18.186-.082.09-.15.206-.07.11-.097.262.24-.027.503-.13.261-.111.496-.208-.028-.213-.152-.344-.117-.13-.248-.172zM58.332 1.288q.007.049 0 .076 0 .02-.007.042v.048q0 .02.014.069-.145.234-.337.324-.186.082-.407.124-.22.034-.455.075-.227.042-.454.18-.09-.035-.166 0-.069.034-.207.02-.04.042-.103.062-.062.014-.124.035.028.062.02.13 0 .063.021.104.242.02.531-.007.296-.028.579-.034.007.034-.007.048-.014.007-.007.034.048.035.096.09l.097.096q.048.049.096.083.055.028.124.02.028.056.035.125.014.062-.014.13-.11.076-.22.159-.11.076-.235.138-.117.062-.255.103-.13.035-.296.028h-.055q-.014 0-.041-.02-.056.034-.159.02-.096-.014-.152.02-.075-.034-.186-.027-.103 0-.186-.028-.11.145-.2.31-.089.166-.158.352.234.034.386.027.158-.007.296-.02.138-.021.283-.035.144-.02.365-.014.138-.075.324-.096.193-.028.351-.083.055.021.097.076.041.048.075.097.042.04.083.075.041.035.104.028.027.027.034.069.014.034.02.069.008.034.021.062.021.02.062.013-.103.228-.24.352-.132.117-.304.179-.172.062-.386.096-.206.035-.461.083-.062.014-.104-.007-.041-.014-.096-.014-.159.035-.38.062-.22.028-.447.021-.227-.007-.434-.062-.207-.048-.338-.179-.055-.048-.076-.11-.013-.07-.09-.104-.006-.09-.027-.2l-.041-.227q-.02-.124-.035-.24-.007-.118.014-.215.02-.103.083-.186.069-.082.048-.179.035-.007.041-.034.007-.035.056-.028.04-.124.09-.234.047-.11.096-.214.055-.103.103-.206.055-.11.103-.241-.096-.09-.144-.193-.042-.11-.062-.214-.021-.11-.035-.22-.014-.118-.048-.235.069-.103.165-.165.104-.069.22-.11.118-.042.256-.07.138-.027.29-.061.275-.09.488-.138.22-.048.427-.076.214-.034.441-.062.228-.027.517-.083.062.062.117.062.028-.062.062-.034.042.02.035-.041.069.117.172.2.11.075.241.13zM58.394 3.659q-.103-.007-.165-.049-.062-.048-.062-.124 0-.068.062-.124.041-.103.083-.165l.096-.138q.07-.096.138-.193.069-.096.152-.193.04-.034.068-.048.076-.055.152-.103.076-.055.172-.09.173-.062.338-.062.165-.007.282 0 .097.007.18.02.09.008.151.022.104.048.166.09.068.04.13.096.076.04.118.09.048.04.082.089.021.027.083.09.062.061.152.061.082 0 .137-.075.062-.076.124-.131.056-.145.18-.22.055-.028.09-.035l.075-.014q.02-.007.041-.007.021-.007.035-.014l.076-.007h.09q.116-.034.206-.034.103.007.165.055.062.041.062.117 0 .076-.062.124-.041.11-.09.172-.04.062-.089.131l-.138.193q-.069.097-.158.193-.028.035-.07.048-.068.056-.144.11-.076.049-.172.083-.18.062-.345.07-.158 0-.275-.008l-.186-.013q-.083-.014-.152-.028-.096-.048-.165-.09-.07-.04-.131-.09-.076-.047-.117-.089-.042-.048-.076-.096-.02-.028-.09-.09-.069-.069-.144-.062-.076.007-.145.083-.062.069-.124.124-.041.138-.172.22-.055.028-.097.035l-.069.014-.041.013q-.02 0-.035.007l-.075.007h-.09q-.117.035-.207.035z" />
            </g> */}
        </svg>
    );
};

export default Logo;
