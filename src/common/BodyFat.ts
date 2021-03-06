export class BodyFat {
  /**
   * Body fat percentage from body density
   *
   * @param bodyDensity number
   *
   * @return number
   */
  public static getPercentageFromDensity(bodyDensity: number): number {
    return 495 / bodyDensity - 450;
  }
}
