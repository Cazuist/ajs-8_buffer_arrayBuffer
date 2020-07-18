import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

describe('Начинаем тестирование класса ArrayBufferConverter', () => {
  describe('Тестируем метод load:', () => {
    test('Должны получить требуемый ArrayBuffer', () => {
      const buf = getBuffer();

      ArrayBufferConverter.load(buf);

      expect(ArrayBufferConverter.buffer).toEqual(buf);
    });
  });

  describe('Тестируем метод toString:', () => {
    test('Должны получить требуемую строку', () => {
      const buf = getBuffer();

      ArrayBufferConverter.load(buf);
      const received = ArrayBufferConverter.toString();

      const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

      expect(received).toBe(expected);
    });
  });
});
