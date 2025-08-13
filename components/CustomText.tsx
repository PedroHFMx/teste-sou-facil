import { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

type CustomTextProps = TextProps & {
  children: ReactNode;
  className?: string;
};

export function HeadText({ children, className }: CustomTextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Bold',
        fontSize: 50,
        lineHeight: 50,
        includeFontPadding: false,
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}

export function TitleText({ children, className }: CustomTextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        includeFontPadding: false,
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}

export function TitleText2({ children, className }: CustomTextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Medium',
        fontSize: 30,
        includeFontPadding: false,
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}

export function TitleText3({ children, className }: CustomTextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        includeFontPadding: false,
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}

export function ButtonText({ children, className }: CustomTextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        includeFontPadding: false,
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}

export function BodyText({ children, className }: CustomTextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        includeFontPadding: false,
      }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}
