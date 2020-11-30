<template>
  <div :class="wrapper">
    <template v-if="type !== 'mobile'">
      <label>
        <nb-select
          v-model="currentProvince"
          :disabled="disabled || provinceDisabled"
          class="select-div"
          @change="getCities"
        >
          <nb-option
            v-for="(item, index) in provinces"
            :key="index"
            :label="item"
            :value="item"
          >
          </nb-option>
        </nb-select>
      </label>
      <template v-if="!onlyProvince">
        <label>
          <nb-select
            v-model="currentCity"
            :disabled="disabled || cityDisabled"
            class="select-div"
            @change="getAreas"
          >
            <nb-option
              v-for="(item, index) in cities"
              :key="index"
              :label="item"
              :value="item"
            >
            </nb-option>
          </nb-select>
        </label>
        <label>
          <nb-select
            v-if="!hideArea"
            v-model="currentArea"
            :disabled="disabled || areaDisabled"
            class="select-div"
          >
            <nb-option
              v-for="(item, index) in areas"
              :key="index"
              :label="item"
              :value="item"
            >
            </nb-option>
          </nb-select>
        </label>
      </template>
    </template>
    <template v-else>
      <div :class="addressHeader">
        <ul>
          <li :class="{ active: tab === 1 }" @click="resetProvince">
            {{
              currentProvince && !staticPlaceholder
                ? currentProvince
                : placeholders.province
            }}
          </li>
          <template v-if="!onlyProvince">
            <li
              v-if="showCityTab"
              :class="{ active: tab === 2 }"
              @click="resetCity"
            >
              {{
                currentCity && !staticPlaceholder
                  ? currentCity
                  : placeholders.city
              }}
            </li>
            <li v-if="showAreaTab && !hideArea" :class="{ active: tab === 3 }">
              {{
                currentArea && !staticPlaceholder
                  ? currentArea
                  : placeholders.area
              }}
            </li>
          </template>
        </ul>
      </div>
      <div :class="addressContainer">
        <ul v-if="tab === 1">
          <li
            v-for="(item, index) in provinces"
            :key="index"
            :class="{ active: item === currentProvince }"
            @click="chooseProvince(item)"
          >
            {{ item }}
          </li>
        </ul>
        <template v-if="!onlyProvince">
          <ul v-if="tab === 2">
            <li
              v-for="(item, index) in cities"
              :key="index"
              :class="{ active: item === currentCity }"
              @click="chooseCity(item)"
            >
              {{ item }}
            </li>
          </ul>
          <ul v-if="tab === 3 && !hideArea">
            <li
              v-for="(item, index) in areas"
              :key="index"
              :class="{ active: item === currentArea }"
              @click="chooseArea(item)"
            >
              {{ item }}
            </li>
          </ul>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
const DEFAULT_CODE = 1;

export default {
  name: "eppDispickers",
  props: {
    province: { type: [String, Number], default: "" },
    city: { type: [String, Number], default: "" },
    area: { type: [String, Number], default: "" },
    type: { type: String, default: "" },
    hideArea: { type: Boolean, default: false },
    onlyProvince: { type: Boolean, default: false },
    staticPlaceholder: { type: Boolean, default: false },
    placeholders: {
      type: Object,
      default() {
        return {
          province: "省",
          city: "市",
          area: "区"
        };
      }
    },
    districts: {
      type: [Array, Object],
      default() {
        return {};
      }
    },
    disabled: { type: Boolean, default: false },
    provinceDisabled: { type: Boolean, default: false },
    cityDisabled: { type: Boolean, default: false },
    areaDisabled: { type: Boolean, default: false },
    addressHeader: { type: String, default: "address-header" },
    addressContainer: { type: String, default: "address-container" },
    wrapper: { type: String, default: "distpicker-address-wrapper" }
  },
  data() {
    return {
      tab: 1,
      showCityTab: false,
      showAreaTab: false,
      provinces: [],
      cities: [],
      areas: [],
      currentProvince:
        this.determineType(this.province) || this.placeholders.province,
      currentCity: this.determineType(this.city) || this.placeholders.city,
      currentArea: this.determineType(this.area) || this.placeholders.area
    };
  },
  watch: {
    currentProvince(vaule) {
      this.$emit("province", this.setData(vaule, "province"));
      if (this.onlyProvince) this.emit("selected");
    },
    currentCity(value) {
      this.$emit("city", this.setData(value, "city", this.currentProvince));
      if (value != this.placeholders.city && this.hideArea)
        this.emit("selected");
    },
    currentArea(value) {
      this.$emit(
        "area",
        this.setData(value, "area", this.currentProvince, true)
      );
      this.emit("selected");
    },
    province(value) {
      this.currentProvince = this.province || this.placeholders.province;
      this.cities = this.determineValue(
        "province",
        this.currentProvince,
        this.placeholders.province
      );
    },
    city(value) {
      this.currentCity = this.city || this.placeholders.city;
      this.areas = this.determineValue(
        "city",
        this.currentCity,
        this.placeholders.city,
        this.currentProvince
      );
    },
    area(value) {
      this.currentArea = this.area || this.placeholders.area;
    }
  },
  created() {
    if (this.type !== "mobile") {
      this.provinces = this.getDistricts();
      this.cities = this.province
        ? this.getDistricts(this.getAreaCode(this.determineType(this.province)))
        : [];
      let directCity = this.isDirectCity(this.province, this.city);
      this.areas = this.city
        ? this.getDistricts(
            this.getAreaCode(
              this.determineType(this.city),
              directCity ? this.determineType(this.city) : this.area
            )
          )
        : [];
    } else {
      if (this.area && !this.hideArea && !this.onlyProvince) {
        this.tab = 3;
        this.showCityTab = true;
        this.showAreaTab = true;
        let directCity = this.isDirectCity(this.province, this.city);
        this.areas = this.getDistricts(
          this.getAreaCode(
            this.determineType(this.city),
            directCity ? this.determineType(this.city) : this.area
          )
        );
      } else if (this.city && this.hideArea && !this.onlyProvince) {
        this.tab = 2;
        this.showCityTab = true;
        this.cities = this.getDistricts(
          this.getAreaCode(this.determineType(this.province))
        );
      } else {
        this.provinces = this.getDistricts();
      }
    }
  },
  methods: {
    setData(value, type, check = "", isArea = false) {
      let code;

      if (isArea) {
        code = this.getCodeByArea(value);
      } else {
        code = this.getAreaCode(value, check, type);
      }
      return {
        code: code,
        value: value
      };
    },
    getCodeByArea(value) {
      let code;
      Object.values(this.areas).forEach((item, key) => {
        if (item === value) {
          code = Object.keys(this.areas)[key];
        }
      });
      return code;
    },
    emit(name) {
      let data = {
        province: this.setData(this.currentProvince, "province")
      };

      if (!this.onlyProvince) {
        this.$set(data, "city", this.setData(this.currentCity, "city"));
      }

      if (!this.onlyProvince || this.hideArea) {
        this.$set(
          data,
          "area",
          this.setData(this.currentArea, "area", this.currentCity)
        );
      }

      this.$emit(name, data);
    },
    getCities() {
      this.currentCity = this.placeholders.city;
      this.currentArea = this.placeholders.area;
      this.cities = this.determineValue(
        "province",
        this.currentProvince,
        this.placeholders.province
      );
      this.cleanList("areas");
      if (this.cities.length === 0) {
        this.emit("selected");
        this.tab = 1;
        this.showCityTab = false;
      }
    },
    getAreas() {
      this.currentArea = this.placeholders.area;
      this.areas = this.determineValue(
        "city",
        this.currentCity,
        this.placeholders.city,
        this.currentProvince
      );
      if (this.areas.length === 0) {
        this.emit("selected");
        this.tab = 2;
        this.showAreaTab = false;
      }
    },
    resetProvince() {
      this.tab = 1;
      this.provinces = this.getDistricts();
      this.showCityTab = false;
      this.showAreaTab = false;
    },
    resetCity() {
      this.tab = 2;
      this.showCityTab = true;
      this.showAreaTab = false;
      this.getCities();
    },
    chooseProvince(name) {
      this.currentProvince = name;
      if (this.onlyProvince) return;
      this.tab = 2;
      this.showCityTab = true;
      this.showAreaTab = false;
      this.getCities();
    },
    chooseCity(name) {
      this.currentCity = name;
      if (this.hideArea) return;
      this.tab = 3;
      this.showCityTab = true;
      this.showAreaTab = true;
      this.getAreas();
    },
    chooseArea(name) {
      this.currentArea = name;
    },
    getAreaCodeByPreCode(name, preCode) {
      let codes = [];

      for (let x in this.districts) {
        for (let y in this.districts[x]) {
          if (name === this.districts[x][y]) {
            codes.push(y);
          }
        }
      }

      if (codes.length > 1) {
        let index;
        codes.forEach((item, i) => {
          if (
            (preCode.length === 2 && item.slice(0, 2) === preCode) ||
            (preCode.length === 4 && item.slice(0, 4) !== preCode)
          ) {
            index = i;
          }
        });

        return codes[index];
      } else {
        return codes[0];
      }
    },
    getAreaCode(name, check = "", type = "") {
      for (let x in this.districts) {
        for (let y in this.districts[x]) {
          if (name === this.districts[x][y]) {
            if (check.length > 0) {
              let code = y;

              if (name === check) {
                let preCode = type === "city" ? y.slice(0, 4) : y.slice(0, 2);
                code = this.getAreaCodeByPreCode(check, preCode);
              }

              if (!code || y.slice(0, 2) !== code.slice(0, 2)) {
                continue;
              } else {
                return code;
              }
            } else {
              return y;
            }
          }
        }
      }
    },
    getCodeValue(code) {
      for (let x in this.districts) {
        for (let y in this.districts[x]) {
          if (code === parseInt(y)) {
            return this.districts[x][y];
          }
        }
      }
    },
    getDistricts(code = DEFAULT_CODE) {
      if(this.districts) {
       return this.districts[code] || [];
      } 
    },
    determineValue(type, currentValue, placeholderValue, check = "") {
      if (currentValue === placeholderValue) {
        return [];
      } else {
        return this.getDistricts(this.getAreaCode(currentValue, check, type));
      }
    },
    determineType(value) {
      if (typeof value === "number") {
        return this.getCodeValue(value);
      }

      return value;
    },
    cleanList(name) {
      this[name] = [];
    },
    isDirectCity(province, city) {
      if (province && city) {
        return (
          this.determineType(this.province) === this.determineType(this.city)
        );
      }
      return false;
    }
  }
};
</script>

<style lang="scss">
.distpicker-address-wrapper {
  .select-div {
    width: 160px;
  }
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
  .address-header {
    background-color: #fff;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: stretch;

      li {
        display: inline-block;
        padding: 10px 10px 7px;

        &.active {
          border-bottom: #52697f solid 3px;
          color: #52697f;
        }
      }
    }
  }
  .address-container {
    background-color: #fff;

    ul {
      height: 100%;
      overflow: auto;

      li {
        padding: 8px 10px;
        border-top: 1px solid #f6f6f6;

        &.active {
          color: #52697f;
        }
      }
    }
  }
}
.disabled-color {
  background: #f8f8f8;
}
</style>
